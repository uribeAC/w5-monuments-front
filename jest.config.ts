import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  testEnvironment: "jsdom",
  ...createDefaultPreset(),
};

export default config;
