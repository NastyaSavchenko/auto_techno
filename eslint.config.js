// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:prettier/recommended',
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // головне правило авто-сорту імпортів + порожні рядки між групами
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1) react, node builtins, інші external
            ['^react$', '^node:', '^@?\\w'],
            // 2) internal alias'и (підлаштуй під свої: @ або src)
            ['^(@|src)(/.*|$)'],
            // 3) parent
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // 4) sibling
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // 5) стилі/ассети в кінці (опційно)
            ['^.+\\.s?css$', '^.+\\.(png|jpe?g|svg|gif|webp)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // якщо десь було — вимкни, щоб не конфліктувало:
      // 'import/order': 'off',
    },
  },
])
