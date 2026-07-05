# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.test.ts >> User can login successfully
- Location: tests\auth\login.test.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#username')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async goto() {
  7  |     await this.page.goto('/practice-test-login');
  8  |   }
  9  | 
  10 |   async login(username: string, password: string) {
> 11 |     await this.page.fill('#username', username);
     |                     ^ Error: page.fill: Test timeout of 30000ms exceeded.
  12 |     await this.page.fill('#password', password);
  13 |     await this.page.click('button[id="submit"]');
  14 |   }
  15 | }
  16 | 
```