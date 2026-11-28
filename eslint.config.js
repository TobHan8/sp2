import { defineConfig } from 'eslint/config';
import js from 'eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default defineConfig(
    { ignores: ['dist', 'playwright-report', 'test-results'] },
    js.configs.recommended,
    tseslint.configs.recommended,
    { languageOptions: { globals: globals.browser } },
    prettier,
);