module.exports = {
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
    "jest/globals": true
  },
  extends: [
    "eslint:recommended",
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:jest/all',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: ["src/inject.js", "dist/", '.eslintrc.js', 'webpack.js', 'postcss.config.js'],
  overrides: [
    {
      "files": ["tests/*.js"],
      "rules": {
        'jest/require-hook': "error"
      }
    }
  ],
  rules: {
    'jest/require-hook': "off",
    "quotes": ["error", "single"]
  },
};
