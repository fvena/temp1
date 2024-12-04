import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import nodePlugin from "eslint-plugin-n";
import unicornPlugin from "eslint-plugin-unicorn";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import prettierPlugin from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules", "dist", "*.config.*", "docs"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-loop-func": "error",
    },
  },
  pluginJs.configs.recommended,
  nodePlugin.configs["flat/recommended-module"],
  perfectionistPlugin.configs["recommended-natural"],
  unicornPlugin.configs["flat/recommended"],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettierPlugin,
];
