export const __AUTO__: versionConfig = {
    type: "auto",
    git: {
        major: { autoCommit: false },
        minor: { autoCommit: false },
        patch: { autoCommit: false },
        rc: { autoCommit: true, needCommitMessage: true },
        gamma: { autoCommit: true, needCommitMessage: true },
        beta: { autoCommit: true, needCommitMessage: true },
        preview: { autoCommit: true, needCommitMessage: false },
        alpha: { autoCommit: true, needCommitMessage: false },
        snapshot: { autoCommit: true, needCommitMessage: false },
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

export type autoCommitLevel =
    | {
          autoCommit: false;
      }
    | {
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
