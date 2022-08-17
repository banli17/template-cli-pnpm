module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  },
}
