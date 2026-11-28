import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
    base: '/sp2/',
    build: {
        rolldownOptions: {
            input: {
                main: 'index.html',
                // Add next pages here...
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
            },
        },
    },
    test: {
        exclude: [...configDefaults.exclude, 'e2e/**'],
    },
});