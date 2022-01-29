module.exports = {
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:jest/all',
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
  ignorePatterns: ["src/inject.js", "dist/", '.eslintrc.js'],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    'jest/require-hook': "off"
  },
};

