module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 9
  },
  env: {
    node: true
  },
  rules: {
    'semi': ['error', 'never'],
    'prefer-promise-reject-errors': 'off',
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
  }
}
