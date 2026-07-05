import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Folder where Playwright will look for test files
  testDir: "./tests",

  // Number of retries for failed tests
  //retries: 1,

  // Reporters: console list + Allure report + HTML report
  reporter: [
    ["html"],
    ["allure-playwright"],
    ["junit", { outputFile: "results.xml" }],
  ],

  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
  //ENV=staging npx playwright test
  //ENV=prod npx playwright test
  //ENV=dev npx playwright test
  projects: [
    // DEV environment - Desktop
    {
      name: "dev-chromium",
      use: {
        ...devices["Desktop Chrome"],
       
      },
    },
    {
      name: "dev-firefox",
      use: {
        ...devices["Desktop Firefox"],
       
      },
    },
    {
      name: "dev-webkit",
      use: {
        ...devices["Desktop Safari"]
      },
    },

    // DEV environment - Mobile
    {
      name: "dev-mobile-chrome",
      use: {
        ...devices["Pixel 5"]
      },
    },
    {
      name: "dev-mobile-safari",
      use: {
        ...devices["iPhone 12"],
      },
    },

    // STAGING environment - Desktop
    {
      name: "staging-chromium",
      use: {
        ...devices["Desktop Chrome"]
      },
    },
    {
      name: "staging-firefox",
      use: {
        ...devices["Desktop Firefox"]
      },
    },
    {
      name: "staging-webkit",
      use: {
        ...devices["Desktop Safari"]
      },
    },

    // STAGING environment - Mobile
    {
      name: "staging-mobile-chrome",
      use: {
        ...devices["Pixel 5"]
      },
    },
    {
      name: "staging-mobile-safari",
      use: {
        ...devices["iPhone 12"]
      },
    },

    // PROD environment - Desktop
    {
      name: "prod-chromium",
      use: {
        ...devices["Desktop Chrome"]
      },
    },
    {
      name: "prod-firefox",
      use: {
        ...devices["Desktop Firefox"]
      },
    },
    {
      name: "prod-webkit",
      use: {
        ...devices["Desktop Safari"]
      },
    },

    // PROD environment - Mobile
    {
      name: "prod-mobile-chrome",
      use: {
        ...devices["Pixel 5"]
      },
    },
    {
      name: "prod-mobile-safari",
      use: {
        ...devices["iPhone 12"]
      },
    },
  ],
});
