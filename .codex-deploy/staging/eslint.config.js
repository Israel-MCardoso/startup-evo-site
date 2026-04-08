import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.vercel/**',
      'app/**',
      'components/**',
      'lib/**',
      'celular/**',
    ],
  },
  {
    ...js.configs.recommended,
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'react/jsx-uses-vars': 'error',
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['vite.config.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
];
