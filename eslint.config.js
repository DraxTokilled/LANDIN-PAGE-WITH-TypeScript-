import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
<<<<<<< HEAD
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
=======
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
>>>>>>> ceba5e39f5300bec004004b665389d4503f98128
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
<<<<<<< HEAD
      reactHooks.configs['recommended-latest'],
=======
      reactHooks.configs.flat.recommended,
>>>>>>> ceba5e39f5300bec004004b665389d4503f98128
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
