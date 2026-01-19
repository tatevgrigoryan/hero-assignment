/**
 * Base ESLint config for TypeScript + React packages.
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "jsx-a11y", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        project: true
      }
    }
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": ["error", { "fixStyle": "inline-type-imports" }],
    "react/react-in-jsx-scope": "off"
  }
};
