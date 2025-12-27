export interface SkinConfig {
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
}

export interface SkinConfigResult {
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
}

export interface Patch {
    Match: string | RegExp;
    TargetCss?: string;
    TargetJs?: string;
}

export interface PatchResult {
    MatchRegexString: string;
    TargetCss?: string;
    TargetJs?: string;
}

export type namedExports = namedExport[];

export type namedExport = {
    exportLocal: string;
    links: string[];
};

export type bump_tag =
    | null
    | undefined
    | "major"
    | "minor"
    | "patch"
    | "rc"
    | "gamma"
    | "beta"
    | "preview"
    | "alpha"
    | "snapshot";

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

export enum versionConfig {
    auto,
    package,
}
