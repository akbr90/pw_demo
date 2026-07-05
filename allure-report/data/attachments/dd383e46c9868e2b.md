# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.test.ts >> User can login successfully
- Location: tests\auth\login.test.ts:5:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://staging.example.com/practice-test-login
Call log:
  - navigating to "https://staging.example.com/practice-test-login", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async goto() {
> 7  |     await this.page.goto('/practice-test-login');
     |                     ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://staging.example.com/practice-test-login
  8  |   }
  9  | 
  10 |   async login(username: string, password: string) {
  11 |     await this.page.fill('#username', username);
  12 |     await this.page.fill('#password', password);
  13 |     await this.page.click('button[id="submit"]');
  14 |   }
  15 | }
  16 | 
```