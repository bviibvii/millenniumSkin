import { defineConfig, LibraryRoot } from "./src/ts/index";

export default defineConfig({
    name: "Transparent Steam",
    description: "description",
    author: "bvii",
    header_image: "",
    splash_image: "",
    github: {
        owner: "bviibvii",
        repo_name: "steam",
    },
    RootColors: "css/color",
    Patches: [
        {
            Match: LibraryRoot,
            TargetJs: "ts/a",
            TargetCss: "css/a",
        },
    ],
    srcCss: "lib",
    srcJs: "lib",
});
