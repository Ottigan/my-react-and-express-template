module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'log'] }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-underscore-dangle': 'off',
    semi: ['warn', 'always'],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-mixed-operators': 'off',
    'quote-props': ['error', 'as-needed'],
  },
};
