export declare const __AUTO__: versionConfig;
export declare const __PACKAGE__: versionConfig;
export declare const __DEFAULT__: versionConfig;
export type autoCommitLevel = {
    autoCommit: false;
} | {
    autoCommit: true;
    needCommitMessage: boolean;
};
export type versionConfig = {
    type: "auto" | "package";
    git?: {
        major: autoCommitLevel;
        minor: autoCommitLevel;
        patch: autoCommitLevel;
        rc: autoCommitLevel;
        gamma: autoCommitLevel;
        beta: autoCommitLevel;
        preview: autoCommitLevel;
        alpha: autoCommitLevel;
        snapshot: autoCommitLevel;
    };
};
