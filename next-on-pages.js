const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
    "plugin:next-on-pages/recommended",
    "turbo",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "next-on-pages"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@next/next/no-html-link-for-pages": "off",
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
