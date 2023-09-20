module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    'no-restricted-imports': [2, {patterns: ['..', '../*']}],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
  },
};
