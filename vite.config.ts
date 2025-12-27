import { defineConfig } from "vite";
import { resolve } from "path";
import aaa from "./src/ts/index";
import dts from "vite-plugin-dts";

const rg: any = {
    build: {
        ssr: true,
        lib: {
            entry: resolve(__dirname, "src/ts/index.ts"),
            name: "VitePluginMillenniumSkin",
            fileName: "index",
            formats: ["es"],
        },
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            external: ["vite"],
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
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
