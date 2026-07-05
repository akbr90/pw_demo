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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#username')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - heading "Log In" [level=1] [ref=e2]
  - generic [ref=e3]:
    - link "Powered by WordPress" [ref=e4] [cursor=pointer]:
      - /url: https://wordpress.org/
    - generic [ref=e5]:
      - paragraph [ref=e6]:
        - generic [ref=e7]: Username or Email Address
        - textbox "Username or Email Address" [active] [ref=e8]
      - generic [ref=e9]:
        - generic [ref=e10]: Password
        - generic [ref=e11]:
          - textbox "Password" [ref=e12]
          - button "Show password" [ref=e13] [cursor=pointer]:
            - generic [ref=e14]: 
      - generic [ref=e15]:
        - generic [ref=e16]: or
        - link "Login with Bluehost" [ref=e17] [cursor=pointer]:
          - /url: https://www.bluehost.com/my-account/hosting/details/sites?channelid=P99C100S1N0B3003A151D115E0000V112&utm_medium=bluehost_plugin&utm_source=%2Fwp-login.php%3Fhosting_login_button
          - img [ref=e19]
          - generic [ref=e29]: Login with Bluehost
      - paragraph [ref=e30]:
        - checkbox "Remember Me" [ref=e31] [cursor=pointer]
        - generic [ref=e32]: Remember Me
      - paragraph [ref=e33]:
        - button "Log In" [ref=e34] [cursor=pointer]
    - paragraph [ref=e35]:
      - link "Lost your password?" [ref=e36] [cursor=pointer]:
        - /url: https://practicetestautomation.com/wp-login.php?action=lostpassword
    - paragraph [ref=e37]:
      - link "← Go to Practice Test Automation" [ref=e38] [cursor=pointer]:
        - /url: https://practicetestautomation.com/
    - link "Privacy Policy" [ref=e40] [cursor=pointer]:
      - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   username = this.page.locator('#username');
  8  |   password = this.page.locator('#password');
  9  |   submit = this.page.locator('button[id="submit"]');
  10 | 
  11 |   async login(user:string, pass:string) {
> 12 |     await this.username.fill(user);
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 |     await this.password.fill(pass);
  14 |     await this.submit.click();
  15 |   }
  16 | }
  17 | 
```