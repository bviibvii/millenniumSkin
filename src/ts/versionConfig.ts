export const __AUTO__: versionConfig = {
    type: "auto",
    git: {
        major: { autoCommit: false },
        minor: { autoCommit: false },
        patch: { autoCommit: false },
        rc: { autoCommit: true },
        gamma: { autoCommit: true },
        beta: { autoCommit: true },
        preview: { autoCommit: true },
        alpha: { autoCommit: true },
        snapshot: { autoCommit: true },
    },
};

export const __PACKAGE__: versionConfig = {
    type: "auto",
    git: {
        major: { autoCommit: false },
        minor: { autoCommit: false },
        patch: { autoCommit: false },
        rc: { autoCommit: false },
        gamma: { autoCommit: false },
        beta: { autoCommit: false },
        preview: { autoCommit: false },
        alpha: { autoCommit: false },
        snapshot: { autoCommit: false },
    },
};

export const __DEFAULT__: versionConfig = __AUTO__;

export type autoCommitLevel = {
    autoCommit: boolean;
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
