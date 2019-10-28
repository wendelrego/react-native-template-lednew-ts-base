module.exports = {
  root: true,
  extends: ['airbnb-typescript'],
  plugins: ['react', 'react-native'],
  parser: '@typescript-eslint/parser',
  rules: {
      '@typescript-eslint/semi': ['error', 'never'],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-underscore-dangle': 'off',
      '@typescript-eslint/indent': [
          'error', 4, { SwitchCase: 1 }
      ],
      indent: [
          'error', 4, { SwitchCase: 1 }
      ],
      'react/jsx-closing-bracket-location': [
          1,
          {
              selfClosing: 'after-props',
              nonEmpty: 'after-props'
          }
      ],
      'react/jsx-curly-brace-presence': [
          1,
          {
              props: 'always'
          }
      ],
      'react/jsx-indent': 0,
      'react/jsx-indent-props': 0,
      'react/jsx-wrap-multilines': 'off',
      'react/no-array-index-key': 'off',
      'operator-linebreak': 'off',
      'no-console': 'off',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      'global-require': 'off',
      'import/no-cycle': 'off'
  },
};
