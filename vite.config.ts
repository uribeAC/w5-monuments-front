import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    reporters: [`verbose`],
  },

  build: {
    target: "ESNext",
  },
});
