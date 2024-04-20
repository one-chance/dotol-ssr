module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
