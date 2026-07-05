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
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "dev-firefox",
      use: {
        ...devices["Desktop Firefox"],
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "dev-webkit",
      use: {
        ...devices["Desktop Safari"],
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },

    // DEV environment - Mobile
    {
      name: "dev-mobile-chrome",
      use: {
        ...devices["Pixel 5"],
        baseURL: "https://practicetestautomation.com",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "dev-mobile-safari",
      use: {
        ...devices["iPhone 12"],
        baseURL: "https://practicetestautomation.com",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },

    // STAGING environment - Desktop
    {
      name: "staging-chromium",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "staging-firefox",
      use: {
        ...devices["Desktop Firefox"],
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "staging-webkit",
      use: {
        ...devices["Desktop Safari"],
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },

    // STAGING environment - Mobile
    {
      name: "staging-mobile-chrome",
      use: {
        ...devices["Pixel 5"],
        baseURL: "https://practicetestautomation.com",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "staging-mobile-safari",
      use: {
        ...devices["iPhone 12"],
        baseURL: "https://practicetestautomation.com",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },

    // PROD environment - Desktop
    {
      name: "prod-chromium",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://practicetestautomation.com",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "prod-firefox",
      use: {
        ...devices["Desktop Firefox"],
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "prod-webkit",
      use: {
        ...devices["Desktop Safari"],
        baseURL: "https://practicetestautomation.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },

    // PROD environment - Mobile
    {
      name: "prod-mobile-chrome",
      use: {
        ...devices["Pixel 5"],
        baseURL: "https://practicetestautomation.com",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
    {
      name: "prod-mobile-safari",
      use: {
        ...devices["iPhone 12"],
        baseURL: "https://practicetestautomation.com",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
  ],
});
