import { FlatCompat } from '@eslint/eslintrc';

import { configs } from '@typescript-eslint/eslint-plugin';

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: configs['recommended'],
});

export default [
  'eslint:recommended',
  compat.config({
    env: {
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    rules: {
      eqeqeq: 'error',
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'arrow-functions/require': ['error'],
      'import/resolver': {
        node: {
          extensions: ['.ts'],
        },
      },
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],
    },
  }),
];
