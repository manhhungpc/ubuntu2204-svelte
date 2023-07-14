import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    optimizeDeps: {
        include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
    },
});
