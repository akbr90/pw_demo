import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  username = this.page.locator('#username');
  password = this.page.locator('#password');
  submit = this.page.locator('button[id="submit"]');

  async login(user:string, pass:string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }
}
