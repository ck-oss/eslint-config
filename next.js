const { JAVASCRIPT_FILES } = require("./constants");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "./base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/react",
    "plugin:@next/next/recommended",
    "turbo",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: {
        babelOptions: {
          presets: ["next/babel"],
        },
      },
    },
  ],
};
