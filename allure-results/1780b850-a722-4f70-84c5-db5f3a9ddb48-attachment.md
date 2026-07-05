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

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in staging.example.com.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
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