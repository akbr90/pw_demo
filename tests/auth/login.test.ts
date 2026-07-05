import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { config } from "../../utils/configManager";

test("User can login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(config.baseUrl);
  await loginPage.login(config.username, config.password);
});
