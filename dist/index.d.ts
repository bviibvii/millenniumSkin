import { Plugin, LogOptions } from 'vite';
import { versionConfig } from './versionConfig';
export * from './aliasModules';
export * from './defaultMatch';
export * from './versionConfig';
export * from './versionConfig';
export type SkinConfig = {
    name: string;
    description: string;
    author: string;
    version?: versionConfig;
    tags?: string[];
    header_image: string;
    splash_image: string;
    github: {
        owner: string;
        repo_name: string;
    };
    discord_support?: {
        inviteCodeExcludingLink?: string;
    };
    "Steam-WebKit"?: string;
    UseDefaultPatches?: boolean;
    RootColors?: string;
    Patches?: Patch[];
    srcJs: string;
    srcCss: string;
};
export type SkinConfigResult = {
    name: string;
    description: string;
    author: string;
    version: string;
    header_image: string;
    splash_image: string;
    github: {
        owner: string;
        repo_name: string;
    };
    RootColors?: string;
    Patches: PatchResult[];
};
export type Patch = {
    Match: string | RegExp;
    TargetCss?: string;
    TargetJs?: string;
};
export type PatchResult = {
    MatchRegexString: string;
    TargetCss?: string;
    TargetJs?: string;
};
export type namedExports = namedExport[];
export type namedExport = {
    exportLocal: string;
    links: string[];
};
export type bump_tag = null | undefined | "major" | "minor" | "patch" | "rc" | "gamma" | "beta" | "preview" | "alpha" | "snapshot";
export type versionObject = {
    major: number;
    minor: number;
    patch: number;
    rc?: number;
    gamma?: number;
    beta?: number;
    preview?: number;
    alpha?: number;
    snapshot?: number;
};
export default function millenniumSkin(): Plugin;
export declare function defineConfig(SkinConfig: SkinConfig): SkinConfig;
export declare function warn(msg: string, options?: LogOptions): void;
export declare function info(msg: string, options?: LogOptions): void;
export declare function error(msg: string, options?: LogOptions): void;
