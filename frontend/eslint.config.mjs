import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: ["@typescript-eslint", "react", "react-hooks", "react-refresh"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
    },
  },
]);
