module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-body-style': 'off',
    'no-console': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-return-await': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    indent: 'warn',
    'no-unused-vars': 'warn',
    'linebreak-style': 'off',
    'consistent-return': 'off',
    'function-paren-newline': 'off',
    'import/prefer-default-export': 'off',
    'jsx-quotes': 'off',
    'object-curly-newline': 'off',
    'react/self-closing-comp': 'warn',
    'operator-linebreak': 'off',
  },
};
