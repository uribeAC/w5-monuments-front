import { defineConfig } from "vitest/config";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    reporters: [`verbose`],
  },

  build: {
    target: "ESNext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        add: resolve(__dirname, "add/index.html"),
      },
    },
  },
});
