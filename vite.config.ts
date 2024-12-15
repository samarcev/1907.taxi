import { defineConfig } from "vite";

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern', // Use the modern compiler instead of the legacy one
            },
        },
    },
});
