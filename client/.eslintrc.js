module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'log'] }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'no-underscore-dangle': 'off',
    semi: ['warn', 'always'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-mixed-operators': 'off',
    'quote-props': ['error', 'as-needed'],
  },
};
