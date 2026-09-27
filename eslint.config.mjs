// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['tests/**/*.ts', 'src/**/*.ts'],
    plugins: { playwright },
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-force-option': 'warn',
      'playwright/expect-expect': 'error',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'tests/generated/**',
      'playwright-report/**',
      'test-results/**',
      'results/**',
      'dashboard/**',
    ],
  }
);