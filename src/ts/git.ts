import inquirer from "inquirer";
import simpleGit from "simple-git";
import { info, error } from "./index";

const git = simpleGit();

export async function gitCommit() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "选择提交类型:",
            choices: [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "test",
                "chore",
            ],
            default: "chore",
        },
        {
            type: "input",
            name: "message",
            message: "输入提交信息:",
        },
        {
            type: "confirm",
            name: "confirm",
            message: "确认提交？",
            default: true,
        },
    ]);

    if (!answers.confirm) {
        info("❌ 已取消提交");
        return;
    }
    try {
        await git.add(".");
        await git.commit(`${answers.type}: ${answers.message}`);
        info("✅ 提交成功");
    } catch (e) {
        error(`❌ 提交失败: ${(e as Error).message}`);
    }
}
