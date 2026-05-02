import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  { ignores: ['.next/**', '.contentlayer/**', 'node_modules/**', 'public/**'] },
  ...next,
  prettier,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [
            'builtin',
            'external',
            ['parent', 'internal'],
            'sibling',
            ['unknown', 'index', 'object'],
          ],
          pathGroups: [{ pattern: '~/**', group: 'internal' }],
          'newlines-between': 'always',
        },
      ],
      'jsx-a11y/click-events-have-key-events': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/no-unescaped-entities': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
