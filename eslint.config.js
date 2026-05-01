import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import eslintParser from "astro-eslint-parser";

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["src/scripts/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
      },
    },
  },
  {
    ignores: ["dist", "node_modules", ".astro"],
  },
];
