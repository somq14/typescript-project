/* eslint-env node */
module.exports = {
  root: true,
  extends: ["@somq14/eslint-config"],
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
  },
  ignorePatterns: ["dist", "coverage", ".eslintrc.js"],
};
