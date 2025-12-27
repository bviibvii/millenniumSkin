import t from "@babel/types";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import { generate } from "@babel/generator";
import path, { join } from "path/posix";
import { existsSync } from "fs";
import fsp from "fs/promises";
import { loadConfigFromFile } from "vite";
import chalk from "chalk";
const defaultPatches = [
  {
    Match: "https://.*.steampowered.com",
    TargetCss: "webkit.css",
    TargetJs: "webkit.js"
  },
  {
    Match: "https://steamcommunity.com",
    TargetCss: "webkit.css",
    TargetJs: "webkit.js"
  },
  {
    Match: "^Steam$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^OverlayBrowser_Browser$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^SP Overlay:",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "Supernav$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^notificationtoasts_",
    TargetCss: "notifications.custom.css",
    TargetJs: "notifications.custom.js"
  },
  {
    Match: "^SteamBrowser_Find$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^OverlayTab\\d+_Find$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: "^Steam Big Picture Mode$",
    TargetCss: "bigpicture.custom.css",
    TargetJs: "bigpicture.custom.js"
  },
  {
    Match: "^QuickAccess_",
    TargetCss: "bigpicture.custom.css",
    TargetJs: "bigpicture.custom.js"
  },
  {
    Match: "^MainMenu_",
    TargetCss: "bigpicture.custom.css",
    TargetJs: "bigpicture.custom.js"
  },
  {
    Match: ".friendsui-container",
    TargetCss: "friends.custom.css",
    TargetJs: "friends.custom.js"
  },
  {
    Match: "Menu$",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: ".ModalDialogPopup",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  },
  {
    Match: ".FullModalOverlay",
    TargetCss: "libraryroot.custom.css",
    TargetJs: "libraryroot.custom.js"
  }
];
const __DIRECT__ = 0;
const __RUNTIME__ = 1;
const aliasModules = [
  {
    method: __DIRECT__,
    module: /^react$/g,
    links: ["window", "opener", "SP_REACT"]
  },
  {
    method: __DIRECT__,
    module: /^react-dom$/g,
    links: ["window", "opener", "SP_REACTDOM"]
  }
];
const __AUTO__ = 0;
const __PACKAGE__ = 1;
const Root = /^SharedJSContext$/;
const LibraryRoot = /^Steam$/;
const MenuView = /^View Root Menu$/;
const MenuSteam = /^Steam Root Menu$/;
const MenuFriends = /^Friends Root Menu$/;
const MenuGames = /^Games Root Menu$/;
const MenuHelp = /^Help Root Menu$/;
const MenuNotifications = /^Notifications Menu$/;
const MenuAccount = /^Account Menu$/;
const traver = traverse.default;
const SEMANTIC_VERSIONING_REGEXP = /(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<preRelease>(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0)(?:\.(?:[a-zA-Z1-9][a-zA-Z\d]*|0\d*[a-zA-Z][a-zA-Z\d]*|0))*))?(?:\+(?<metadata>(?:[a-zA-Z\d-]*)(?:\.(?:[a-zA-Z\d-]*))*))?/;
const SEMANTIC_TAGS_REGEXP = /(?:\.)?(?<tag>[a-zA-Z]+)\.(?<number>(?:[1-9]\d*|0\d*|0))/g;
let logger;
function millenniumSkin() {
  const jsMap = [];
  const cssMap = [];
  let skinConfig;
  let skinConfigResult;
  let viteConfig;
  return {
    name: "vite-plugin-millennium-skin",
    enforce: "pre",
    async config(config) {
      const res = await loadConfigFromFile(
        { command: "build", mode: "profuction" },
        "skin.config.ts",
        config.root
      );
      skinConfig = res?.config;
      if (skinConfig.Patches === void 0) {
        if (!skinConfig.UseDefaultPatches)
          throw new Error("haven't any patch in skin.config.ts");
        skinConfig.Patches = defaultPatches;
      }
      skinConfig.Patches.forEach((patch) => {
        if (patch.TargetJs)
          jsMap.push(join(skinConfig.srcJs, patch.TargetJs));
        if (patch.TargetCss)
          cssMap.push(
            findCssModule(join(skinConfig.srcCss, patch.TargetCss))
          );
      });
      if (skinConfig.RootColors !== void 0)
        cssMap.push(
          findCssModule(
            join(skinConfig.srcCss, skinConfig.RootColors)
          )
        );
      return {
        build: {
          rollupOptions: {
            input: [...jsMap, ...cssMap],
            output: {
              entryFileNames: "assets/js/[name].js",
              assetFileNames: (info2) => {
                const name = info2.names[0];
                const file = path.parse(name);
                if (file.ext === ".css")
                  return `assets/css/${name}`;
                if (/\.(png|jpg|jpeg|gif|svg|webp|bmp|heic)/i.test(
                  file.ext
                ))
                  return `assets/images/${name}`;
                return `assets/css/${name}`;
              }
            }
          },
          assetsInlineLimit: 0,
          cssCodeSplit: true
        }
      };
    },
    configResolved(config) {
      viteConfig = config;
      logger = config.logger;
    },
    generateBundle(_, bundles) {
      if (skinConfig.Patches === void 0)
        throw new Error("haven't any patch in building");
      const root = viteConfig.root;
      const patches = structuredClone(
        skinConfig.Patches
      ).map((e) => {
        if (e.Match instanceof RegExp) e.Match = e.Match.source;
        if (e.TargetJs) {
          const parsed = path.parse(e.TargetJs);
          e.TargetJs = join(
            root,
            skinConfig.srcJs,
            parsed.dir,
            parsed.name
          );
        }
        if (e.TargetCss) {
          const parsed = path.parse(e.TargetCss);
          e.TargetCss = join(
            root,
            skinConfig.srcCss,
            parsed.dir,
            parsed.name
          );
        }
        return {
          MatchRegexString: e.Match,
          TargetJs: e.TargetJs,
          TargetCss: e.TargetCss
        };
      });
      Object.entries(bundles).forEach(([, bundle]) => {
        const { type } = bundle;
        const compileLib = bundle.fileName;
        if (type === "chunk") {
          const compileParsed = path.parse(
            bundle.facadeModuleId
          );
          const compilePath = join(
            compileParsed.dir,
            compileParsed.name
          );
          patches.forEach((patch) => {
            if (compilePath !== patch.TargetJs) return;
            patch.TargetJs = compileLib;
          });
        } else {
          const compileParsed = path.parse(
            join(root, bundle.originalFileNames[0])
          );
          const compilePath = join(
            compileParsed.dir,
            compileParsed.name
          );
          patches.forEach((patch) => {
            if (compilePath !== patch.TargetCss) return;
            patch.TargetCss = compileLib;
          });
          if (skinConfig.RootColors && compilePath === join(
            viteConfig.root,
            skinConfig.srcCss,
            skinConfig.RootColors
          ))
            skinConfig.RootColors = compileLib;
          return;
        }
      });
      skinConfigResult = {
        ...skinConfig,
        Patches: patches,
        version: ""
      };
    },
    async writeBundle() {
      const root = viteConfig.root;
      const pkgPath = join(root, "package.json");
      try {
        const pkg = JSON.parse(
          await fsp.readFile(pkgPath, {
            flag: "r",
            encoding: "utf-8"
          })
        );
        if (skinConfig.version === __AUTO__ || skinConfig.version === void 0) {
          const versions = await bump_version(
            pkg.version,
            process.env.RELEASE
          );
          if (versions) {
            const newVersion = versionObjToString(versions.new);
            skinConfigResult.version = newVersion;
            pkg.version = newVersion;
            await fsp.writeFile(
              pkgPath,
              JSON.stringify(pkg, null, 4)
            );
            info(
              `${versionObjToString(versions.native)} -> ${newVersion}`
            );
          }
        } else if (skinConfig.version === __PACKAGE__) {
          skinConfigResult.version = pkg.version;
        }
      } catch (e) {
        warn(`can't use package.json: ${e}`);
      }
      try {
        await fsp.writeFile(
          join(root, viteConfig.build.outDir, "skin.json"),
          JSON.stringify(skinConfigResult, null, 4)
        );
      } catch (e) {
        throw new Error(`can't write skin.json: ${e}`);
      }
    },
    transform(code, id) {
      if (!/.+\.(js|ts|tsx)$/g.test(id)) return;
      const ast = parse(code, {
        sourceType: "module",
        plugins: ["typescript"]
      });
      traver(ast, {
        Program(path2) {
          const body = path2.node.body;
          const runtimeLinks = {};
          for (let i = body.length - 1; i >= 0; i--) {
            let node = body[i];
            if (!t.isImportDeclaration(node)) continue;
            const moduleName = node.source.value;
            const match = [];
            for (const aliasMod of aliasModules) {
              if (!aliasMod.module.test(moduleName)) continue;
              const { method } = aliasMod;
              for (const local of node.specifiers) {
                const exportLocal = local.local.name;
                let links;
                if (local.type === "ImportDefaultSpecifier")
                  links = aliasMod.links;
                else
                  links = [
                    ...aliasMod.links,
                    local.imported.name
                  ];
                switch (method) {
                  case __RUNTIME__:
                    runtimeLinks[exportLocal] = aliasMod.links;
                    break;
                  case __DIRECT__:
                    match.push(
                      generateConstDeclaration(
                        exportLocal,
                        links
                      )
                    );
                    break;
                }
              }
            }
            body.splice(i, 1, ...match);
          }
          Object.entries(runtimeLinks).forEach(
            ([localName, runtimeLink]) => {
              const binding = path2.scope.getBinding(localName);
              if (binding === void 0) return;
              binding.referencePaths.forEach((refPath) => {
                replaceRef(refPath, localName, runtimeLink);
              });
              binding.scope.removeOwnBinding(localName);
            }
          );
        }
      });
      const result = generate(ast);
      return { code: result.code };
    }
  };
}
function defineConfig(SkinConfig) {
  return SkinConfig;
}
function generateConstDeclaration(moduleName, links) {
  let expression = t.identifier(links[0]);
  for (let i = 1; i < links.length; i++) {
    expression = t.memberExpression(expression, t.identifier(links[i]));
  }
  const declarator = t.variableDeclarator(
    t.identifier(moduleName),
    expression
  );
  return t.variableDeclaration("const", [declarator]);
}
function findCssModule(cssPath) {
  const parsed = path.parse(cssPath);
  if (parsed.ext !== "") return cssPath;
  for (const ext of ["scss", "sass", "css"]) {
    const newPath = `${cssPath}.${ext}`;
    if (!existsSync(join(process.cwd(), newPath))) continue;
    return newPath;
  }
  throw new Error(`can't find css module: ${cssPath}`);
}
function replaceRef(refPath, localName, globalObj) {
  const parent = refPath.parent;
  if (t.isMemberExpression(parent) && parent.object === refPath.node) {
    const prop = parent.property;
    if (t.isIdentifier(prop)) {
      const globalMember = createNestedMemberExpression(globalObj);
      if (!refPath.parentPath) return;
      refPath.parentPath.replaceWith(
        t.memberExpression(globalMember, t.identifier(prop.name))
      );
    }
    return;
  }
  if (refPath.isIdentifier()) {
    const globalMember = createNestedMemberExpression(globalObj);
    refPath.replaceWith(
      t.memberExpression(globalMember, t.identifier(localName))
    );
  }
}
function createNestedMemberExpression(globalObj) {
  if (globalObj.length === 0) {
    throw new Error("globalObj must not be empty");
  }
  let node = t.identifier(globalObj[0]);
  for (let i = 1; i < globalObj.length; i++) {
    node = t.memberExpression(node, t.identifier(globalObj[i]));
  }
  return node;
}
async function bump_version(nativeVersion, tag = "snapshot") {
  try {
    const match = SEMANTIC_VERSIONING_REGEXP.exec(nativeVersion);
    if (!match?.groups) {
      warn(`can't understand version: ${nativeVersion}`);
      return;
    }
    let version = {
      major: parseInt(match.groups.major),
      minor: parseInt(match.groups.minor),
      patch: parseInt(match.groups.patch)
    };
    if (match.groups.preRelease) {
      const tagsMatch = [
        ...match.groups.preRelease.matchAll(SEMANTIC_TAGS_REGEXP)
      ];
      tagsMatch.forEach((e) => {
        if (!e.groups) return;
        version[e.groups.tag] = parseInt(e.groups.number);
      });
    }
    const nativeVersionObj = { ...version };
    switch (tag) {
      case null:
        break;
      case void 0:
        break;
      case "major":
        version = {
          major: version.major + 1,
          minor: 0,
          patch: 0
        };
        break;
      case "minor":
        version = {
          major: version.major,
          minor: version.minor + 1,
          patch: 0
        };
        break;
      case "patch":
        version = {
          major: version.major,
          minor: version.minor,
          patch: version.patch + 1
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
      new: version
    };
  } catch (e) {
    warn(`can't bump version: ${e}`);
  }
  return void 0;
}
function versionObjToString(version) {
  let versionString = `${version.major}.${version.minor}.${version.patch}`;
  const optionalFields = ["rc", "gamma", "beta", "preview", "alpha", "snapshot"];
  let first = false;
  for (const field of optionalFields) {
    const value = version[field];
    if (value !== void 0 && value !== null) {
      if (!first) {
        versionString += `-${field}.${value}`;
        first = true;
      } else versionString += `.${field}.${value}`;
    }
  }
  return versionString;
}
function warn(msg, options) {
  if (logger) logger.warn(chalk.yellow(`[MillenniumSkin] ${msg}`), options);
  else console.warn(chalk.yellow(`[MillenniumSkin] ${msg}`));
}
function info(msg, options) {
  if (logger)
    logger.info(chalk.greenBright(`[MillenniumSkin] ${msg}`), options);
  else console.log(chalk.greenBright(`[MillenniumSkin] ${msg}`));
}
export {
  LibraryRoot,
  MenuAccount,
  MenuFriends,
  MenuGames,
  MenuHelp,
  MenuNotifications,
  MenuSteam,
  MenuView,
  Root,
  __AUTO__,
  __DIRECT__,
  __PACKAGE__,
  __RUNTIME__,
  millenniumSkin as default,
  defineConfig
};
