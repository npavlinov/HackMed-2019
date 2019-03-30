module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  rules: {
    "comma-dangle": [1, "only-multiline"],
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error",
    'no-console': 'off'
  }
}

