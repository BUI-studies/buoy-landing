module.exports = {
  root: true,
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react-refresh", "prettier"],
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": ["error"],
    "no-mixed-spaces-and-tabs": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
}
