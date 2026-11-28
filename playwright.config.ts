import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: 'e2e',
    use: {
        baseURL: 'http://localhost:4173/sp2/',
    },
    webServer: {
        command: 'npm run build && npm run preview',
        url: 'http://localhost:4173/sp2/',
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    ],
});