import { defineConfig } from "vite";
import { resolve } from "path";
import aaa from "./src/ts/index";
import dts from "vite-plugin-dts";

const rg: any = {
    build: {
        target: "node18",
        lib: {
            entry: resolve(__dirname, "src/ts/index.ts"),
            fileName: "index",
            formats: ["es"],
        },
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            external: [
                "vite",
                "path/posix",
                "path",
                "fs",
                "fs/promises",
                "@babel/traverse",
                "@babel/generator",
            ],
            output: {
                preserveModules: false,
            },
            makeAbsoluteExternalsRelative: false,
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            include: ["src/**/*.{ts,tsx}", "src/types/**/*"],
        }),
    ],
};

const rt: any = {
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            external: ["vite"],
        },
    },
    plugins: [aaa()],
};

export default defineConfig(rg);
