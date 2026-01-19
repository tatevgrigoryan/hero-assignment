import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";

const webServer = process.env.PLAYWRIGHT_BASE_URL
  ? undefined
  : {
      command: "pnpm --filter @hero/portal dev -- --hostname 0.0.0.0 --port 3000",
      url: baseURL,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000
    };

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],
  webServer
});
