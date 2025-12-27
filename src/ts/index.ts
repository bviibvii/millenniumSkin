import type { Plugin, ResolvedConfig, Logger, LogOptions } from "vite";
import type {
    SkinConfig,
    SkinConfigResult,
    PatchResult,
    bump_tag,
    versionObject,
} from "../types/index";
import type { Statement, MemberExpression, Identifier } from "@babel/types";
import type { NodePath } from "@babel/traverse";
import t from "@babel/types";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import { generate } from "@babel/generator";
import path, { join } from "path/posix";
import { existsSync } from "fs";
import fsp from "fs/promises";
import { loadConfigFromFile } from "vite";
import chalk from "chalk";
import defaultPatches from "./defaultPatches";
import aliasModules, { __DIRECT__, __RUNTIME__ } from "./aliasModules";
import { __AUTO__, __PACKAGE__ } from "./versionConfig";

export * from "./aliasModules";
export * from "./defaultMatch";
export * from "./versionConfig";

const traver = (traverse as any).default as typeof traverse;
const SEMANTIC_VERSIONING_REGEXP =
    /(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<preRelease>(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0)(?:\.(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0))*))?(?:\+(?<metadata>(?:[a-zA-Z\d-]*)(?:\.(?:[a-zA-Z\d-]*))*))?/;
const SEMANTIC_TAGS_REGEXP =
    /(?:\.)?(?<tag>[a-zA-Z]+)\.(?<number>(?:[1-9]\d*|0\d*|0))/g;

export * from "../types/index";

let logger: Logger;
export default function millenniumSkin(): Plugin {
    const jsMap: string[] = [];
    const cssMap: string[] = [];
    let skinConfig: SkinConfig;
    let skinConfigResult: SkinConfigResult;
    let viteConfig: ResolvedConfig;
    return {
        name: "vite-plugin-millennium-skin",
        enforce: "pre",

        async config(config) {
            const res = await loadConfigFromFile(
                { command: "build", mode: "profuction" },
                "skin.config.ts",
                config.root,
            );
            if (res === null) new Error("can't find skin.config.ts from root");
            skinConfig = res?.config as SkinConfig;

            if (skinConfig.Patches === undefined) {
                if (!skinConfig.UseDefaultPatches)
                    throw new Error("haven't any patch in skin.config.ts");
                skinConfig.Patches = defaultPatches;
            }
            // 创建构建文件表
            skinConfig.Patches.forEach((patch) => {
                if (patch.TargetJs)
                    jsMap.push(join(skinConfig.srcJs, patch.TargetJs));
                if (patch.TargetCss)
                    cssMap.push(
                        findCssModule(join(skinConfig.srcCss, patch.TargetCss)),
                    );
            });
            if (skinConfig.RootColors !== undefined)
                cssMap.push(
                    findCssModule(
                        join(skinConfig.srcCss, skinConfig.RootColors),
                    ),
                );

            return {
                build: {
                    rollupOptions: {
                        input: [...jsMap, ...cssMap],
                        output: {
                            entryFileNames: "assets/js/[name].js",
                            assetFileNames: (info) => {
                                const name = info.names[0];
                                const file = path.parse(name);
                                if (file.ext === ".css")
                                    return `assets/css/${name}`;

                                if (
                                    /\.(png|jpg|jpeg|gif|svg|webp|bmp|heic)/i.test(
                                        file.ext,
                                    )
                                )
                                    return `assets/images/${name}`;
                                return `assets/css/${name}`;
                            },
                        },
                    },
                    assetsInlineLimit: 0,
                    cssCodeSplit: true,
                },
            };
        },

        configResolved(config) {
            viteConfig = config;
            logger = config.logger;
        },

        generateBundle(_, bundles) {
            if (skinConfig.Patches === undefined)
                throw new Error("haven't any patch in building");
            const root = viteConfig.root;

            const patches: PatchResult[] = structuredClone(
                skinConfig.Patches,
            ).map((e) => {
                if (e.Match instanceof RegExp) e.Match = e.Match.source;
                if (e.TargetJs) {
                    const parsed = path.parse(e.TargetJs);
                    e.TargetJs = join(
                        root,
                        skinConfig.srcJs,
                        parsed.dir,
                        parsed.name,
                    );
                }
                if (e.TargetCss) {
                    const parsed = path.parse(e.TargetCss);
                    e.TargetCss = join(
                        root,
                        skinConfig.srcCss,
                        parsed.dir,
                        parsed.name,
                    );
                }
                return {
                    MatchRegexString: e.Match,
                    TargetJs: e.TargetJs,
                    TargetCss: e.TargetCss,
                };
            });

            Object.entries(bundles).forEach(([, bundle]) => {
                const { type } = bundle;

                const compileLib = bundle.fileName;
                if (type === "chunk") {
                    const compileParsed = path.parse(
                        bundle.facadeModuleId as string,
                    );
                    const compilePath = join(
                        compileParsed.dir,
                        compileParsed.name,
                    );
                    patches.forEach((patch) => {
                        if (compilePath !== patch.TargetJs) return;
                        patch.TargetJs = compileLib;
                    });
                } else {
                    const compileParsed = path.parse(
                        join(root, bundle.originalFileNames[0] as string),
                    );
                    const compilePath = join(
                        compileParsed.dir,
                        compileParsed.name,
                    );
                    patches.forEach((patch) => {
                        if (compilePath !== patch.TargetCss) return;
                        patch.TargetCss = compileLib;
                    });
                    if (
                        skinConfig.RootColors &&
                        compilePath ===
                            join(
                                viteConfig.root,
                                skinConfig.srcCss,
                                skinConfig.RootColors,
                            )
                    )
                        skinConfig.RootColors = compileLib;
                    return;
                }
            });

            skinConfigResult = {
                ...skinConfig,
                Patches: patches,
                version: "",
            };
        },

        async writeBundle() {
            const root = viteConfig.root;
            const pkgPath = join(root, "package.json");
            // 版本自动管理
            try {
                const pkg = JSON.parse(
                    await fsp.readFile(pkgPath, {
                        flag: "r",
                        encoding: "utf-8",
                    }),
                );
                if (
                    skinConfig.version === __AUTO__ ||
                    skinConfig.version === undefined
                ) {
                    const versions = await bump_version(
                        pkg.version,
                        process.env.RELEASE as any,
                    );
                    if (versions) {
                        const newVersion = versionObjToString(versions.new);
                        skinConfigResult.version = newVersion;
                        pkg.version = newVersion;
                        await fsp.writeFile(
                            pkgPath,
                            JSON.stringify(pkg, null, 4),
                        );
                        info(
                            `${versionObjToString(versions.native)} -> ${newVersion}`,
                        );
                    }
                } else if (skinConfig.version === __PACKAGE__) {
                    skinConfigResult.version = pkg.version;
                }
            } catch (e) {
                warn(`can't use package.json: ${e}`);
            }

            // 写入skin.json
            try {
                await fsp.writeFile(
                    join(root, viteConfig.build.outDir, "skin.json"),
                    JSON.stringify(skinConfigResult, null, 4),
                );
            } catch (e) {
                throw new Error(`can't write skin.json: ${e}`);
            }
        },

        transform(code, id) {
            /**
             * 别名处理， @see aliasModules
             */
            if (!/.+\.(js|ts|tsx)$/g.test(id)) return;

            const ast = parse(code, {
                sourceType: "module",
                plugins: ["typescript"],
            });
            traver(ast, {
                Program(path) {
                    const body = path.node.body;

                    const runtimeLinks: Record<string, string[]> = {};
                    // 处理静态引入别名，收集动态引入别名
                    for (let i = body.length - 1; i >= 0; i--) {
                        let node = body[i];
                        if (!t.isImportDeclaration(node)) continue;

                        const moduleName: string = node.source.value;

                        const match: Statement[] = [];
                        for (const aliasMod of aliasModules) {
                            if (!aliasMod.module.test(moduleName)) continue;
                            const { method } = aliasMod;

                            for (const local of node.specifiers) {
                                const exportLocal = local.local.name;
                                let links: string[];
                                if (local.type === "ImportDefaultSpecifier")
                                    // 默认导出
                                    links = aliasMod.links;
                                else
                                    // 指定导出
                                    links = [
                                        ...aliasMod.links,
                                        (local as any).imported.name,
                                    ];

                                switch (method) {
                                    case __RUNTIME__:
                                        runtimeLinks[exportLocal] =
                                            aliasMod.links;
                                        break;
                                    case __DIRECT__:
                                        match.push(
                                            generateConstDeclaration(
                                                exportLocal,
                                                links,
                                            ),
                                        );
                                        break;
                                }
                            }
                        }
                        body.splice(i, 1, ...match);
                    }
                    // 处理动态引入
                    Object.entries(runtimeLinks).forEach(
                        ([localName, runtimeLink]) => {
                            const binding = path.scope.getBinding(localName);
                            if (binding === undefined) return;

                            binding.referencePaths.forEach((refPath) => {
                                replaceRef(refPath, localName, runtimeLink);
                            });
                            binding.scope.removeOwnBinding(localName);
                        },
                    );
                },
            });
            const result = generate(ast);
            return { code: result.code };
        },
    };
}

export function defineConfig(SkinConfig: SkinConfig): SkinConfig {
    return SkinConfig;
}

function generateConstDeclaration(moduleName: string, links: string[]) {
    let expression: t.Identifier | t.MemberExpression = t.identifier(links[0]);
    for (let i = 1; i < links.length; i++) {
        expression = t.memberExpression(expression, t.identifier(links[i]));
    }
    const declarator = t.variableDeclarator(
        t.identifier(moduleName),
        expression,
    );
    return t.variableDeclaration("const", [declarator]);
}

function findCssModule(cssPath: string): string {
    const parsed = path.parse(cssPath);
    if (parsed.ext !== "") return cssPath;

    for (const ext of ["scss", "sass", "css"]) {
        const newPath = `${cssPath}.${ext}`;
        if (!existsSync(join(process.cwd(), newPath))) continue;
        return newPath;
    }
    throw new Error(`can't find css module: ${cssPath}`);
}

function replaceRef(refPath: NodePath, localName: string, globalObj: string[]) {
    const parent = refPath.parent;

    if (t.isMemberExpression(parent) && parent.object === refPath.node) {
        const prop = parent.property;
        if (t.isIdentifier(prop)) {
            const globalMember = createNestedMemberExpression(globalObj);
            if (!refPath.parentPath) return;
            refPath.parentPath.replaceWith(
                t.memberExpression(globalMember, t.identifier(prop.name)),
            );
        }
        return;
    }

    if (refPath.isIdentifier()) {
        const globalMember = createNestedMemberExpression(globalObj);
        refPath.replaceWith(
            t.memberExpression(globalMember, t.identifier(localName)),
        );
    }
}

function createNestedMemberExpression(globalObj: string[]): t.MemberExpression {
    if (globalObj.length === 0) {
        throw new Error("globalObj must not be empty");
    }

    let node: Identifier | MemberExpression = t.identifier(globalObj[0]);
    for (let i = 1; i < globalObj.length; i++) {
        node = t.memberExpression(node, t.identifier(globalObj[i]));
    }
    return node as t.MemberExpression;
}

async function bump_version(nativeVersion: string, tag: bump_tag = "snapshot") {
    try {
        const match = SEMANTIC_VERSIONING_REGEXP.exec(nativeVersion);

        if (!match?.groups) {
            warn(`can't understand version: ${nativeVersion}`);
            return;
        }
        let version: versionObject = {
            major: parseInt(match.groups.major),
            minor: parseInt(match.groups.minor),
            patch: parseInt(match.groups.patch),
        };

        if (match.groups.preRelease) {
            const tagsMatch = [
                ...match.groups.preRelease.matchAll(SEMANTIC_TAGS_REGEXP),
            ];
            tagsMatch.forEach((e) => {
                if (!e.groups) return;
                (version as any)[e.groups.tag] = parseInt(e.groups.number);
            });
        }
        const nativeVersionObj = { ...version };
        switch (tag) {
            case null:
                break;
            case undefined:
                break;
            case "major":
                version = {
                    major: version.major + 1,
                    minor: 0,
                    patch: 0,
                };
                break;
            case "minor":
                version = {
                    major: version.major,
                    minor: version.minor + 1,
                    patch: 0,
                };
                break;
            case "patch":
                version = {
                    major: version.major,
                    minor: version.minor,
                    patch: version.patch + 1,
                };
                break;
            case "rc":
                version.rc = (version.rc ?? 0) + 1;
                delete version.gamma;
                delete version.beta;
                delete version.preview;
                delete version.alpha;
                delete version.snapshot;
                break;
            case "gamma":
                version.gamma = (version.gamma ?? 0) + 1;
                delete version.beta;
                delete version.preview;
                delete version.alpha;
                delete version.snapshot;
                break;
            case "beta":
                version.beta = (version.beta ?? 0) + 1;
                delete version.preview;
                delete version.alpha;
                delete version.snapshot;
                break;
            case "preview":
                version.preview = (version.preview ?? 0) + 1;
                delete version.alpha;
                delete version.snapshot;
                break;
            case "alpha":
                version.alpha = (version.alpha ?? 0) + 1;
                delete version.snapshot;
                break;
            case "snapshot":
                version.snapshot = (version.snapshot ?? 0) + 1;
                break;
        }
        return {
            native: nativeVersionObj,
            new: version,
        };
    } catch (e) {
        warn(`can't bump version: ${e}`);
    }
    return undefined;
}

function versionObjToString(version: versionObject) {
    let versionString = `${version.major}.${version.minor}.${version.patch}`;

    const optionalFields: (keyof Omit<
        versionObject,
        "major" | "minor" | "patch"
    >)[] = ["rc", "gamma", "beta", "preview", "alpha", "snapshot"];

    let first = false;
    for (const field of optionalFields) {
        const value = version[field];
        if (value !== undefined && value !== null) {
            if (!first) {
                versionString += `-${field}.${value}`;
                first = true;
            } else versionString += `.${field}.${value}`;
        }
    }
    return versionString;
}

function warn(msg: string, options?: LogOptions) {
    if (logger) logger.warn(chalk.yellow(`[MillenniumSkin] ${msg}`), options);
    else console.warn(chalk.yellow(`[MillenniumSkin] ${msg}`));
}

function info(msg: string, options?: LogOptions) {
    if (logger)
        logger.info(chalk.greenBright(`[MillenniumSkin] ${msg}`), options);
    else console.log(chalk.greenBright(`[MillenniumSkin] ${msg}`));
}
