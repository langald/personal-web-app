module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-case-declarations': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}