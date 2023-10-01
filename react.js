/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    "./base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/react",
    "turbo",
    "prettier",
  ],
  env: {
    browser: true,
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
};
