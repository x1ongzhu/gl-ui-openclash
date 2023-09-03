import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";
import viteCompression from "vite-plugin-compression";
import { viteSingleFile } from "vite-plugin-singlefile";
// https://vitejs.dev/config/
export default defineConfig({
    define: {
        "process.env": {},
    },
    build: {
        lib: {
            entry: "src/App.vue",
            name: "gl-sdk4-ui-test.common",
            fileName: `gl-sdk4-ui-test.common`,
            formats: ["cjs"],
        },
        rollupOptions: {},
    },
    plugins: [vue2(), viteCompression({ threshold: 0 }), viteSingleFile()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
