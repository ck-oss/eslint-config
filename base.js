const { resolve } = require("node:path");

const {
  TYPESCRIPT_FILES,
  IGNORE_PATTERNS,
  JAVASCRIPT_FILES,
} = require("./constants");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: ["eslint:recommended", "plugin:import/recommended"],
  ignorePatterns: IGNORE_PATTERNS,
  settings: {
    "import/resolver": {
      node: {},
    },
  },
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false,
      },
    },
    {
      files: TYPESCRIPT_FILES,
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:import/typescript",
      ],
      settings: {
        "import/resolver": {
          typescript: {
            project,
          },
        },
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project,
      },
      plugins: ["@typescript-eslint"],
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
      },
    },
  ],
};
