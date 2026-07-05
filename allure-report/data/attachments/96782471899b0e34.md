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
- generic [active] [ref=e1]:
  - link "Press \"Enter\" to skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-container"
  - generic [ref=e4]:
    - banner [ref=e5]:
      - link "Practice Test Automation" [ref=e9] [cursor=pointer]:
        - /url: https://practicetestautomation.com/
        - img "Practice Test Automation" [ref=e10]
      - button "open menu" [ref=e13]:
        - generic [ref=e14]: open menu
        - img [ref=e15]
    - main [ref=e25]:
      - article [ref=e28]:
        - heading "Hello" [level=1] [ref=e30]
        - generic [ref=e31]:
          - figure [ref=e33]:
            - img "Dmitry Shyshkin, your Selenium WebDriver instructor" [ref=e34]
          - paragraph [ref=e35]:
            - strong [ref=e36]: Welcome to Practice Test Automation!
          - paragraph [ref=e37]: I’m Dmitry Shyshkin, your guide on the path to a thriving QA career. Effortlessly master Selenium WebDriver and test automation to enhance your skills and increase your earnings.
          - paragraph [ref=e38]:
            - strong [ref=e39]: Experience and Expertise
          - paragraph [ref=e40]: As a Principal Software Development Engineer in Test, I bring over a decade of experience in automating Web UI, API, and Mobile tests using tools like Selenium WebDriver, Appium, Postman, RestAssured, and more. I began my journey as a manual QA engineer and quickly developed a passion for test automation. Having served as the lead test automation expert in various projects, I’m confident in my ability to help you excel in test automation.
          - paragraph [ref=e41]:
            - strong [ref=e42]: Beyond Test Automation
          - paragraph [ref=e43]: Not only have I automated tests, but I’ve also applied automation to job searches and even finding cheaper flights! Now, I’m eager to share this passion and knowledge with you.
          - paragraph [ref=e44]:
            - strong [ref=e45]: Courses and Achievements
          - paragraph [ref=e46]:
            - text: In 2017, I started sharing my test automation expertise through video courses, beginning with a Selenium WebDriver tutorial on YouTube. Today, I offer
            - strong [ref=e47]:
              - link "nine courses with over 70,000 students" [ref=e48] [cursor=pointer]:
                - /url: https://practicetestautomation.com/courses/
            - text: ", including a"
            - strong [ref=e49]:
              - link "BestSeller XPath course" [ref=e50] [cursor=pointer]:
                - /url: https://www.udemy.com/course/xpath-locators-for-selenium/?referralCode=ACB28329B5AC2333DDCC
            - text: and a
            - strong [ref=e51]:
              - link "HighestRated Selenium course" [ref=e52] [cursor=pointer]:
                - /url: https://www.udemy.com/course/selenium-for-beginners/?referralCode=A21BE51035C15406EFA4
            - text: . With a 4.7 out of 5 instructor rating, I’m grateful to every student who has joined me on this journey.
          - paragraph [ref=e53]:
            - strong [ref=e54]: A Resourceful Website
          - paragraph [ref=e55]:
            - text: This website was carefully crafted to host a
            - strong [ref=e56]:
              - link "diverse selection of articles, standalone lectures, tips, and examples" [ref=e57] [cursor=pointer]:
                - /url: https://practicetestautomation.com/blog/
            - text: for those interested in test automation. Moreover, with a
            - strong [ref=e58]:
              - link "practical platform" [ref=e59] [cursor=pointer]:
                - /url: https://practicetestautomation.com/practice/
            - text: already established, test automation beginners can easily put their skills into practice.
          - paragraph [ref=e60]:
            - strong [ref=e61]: Looking Ahead
          - paragraph [ref=e62]: As we look ahead, I’m thrilled about the future of Practice Test Automation and delighted to have you on board!
          - paragraph [ref=e63]:
            - strong [ref=e64]: Explore and Learn
          - paragraph [ref=e65]:
            - text: Please be sure to visit our
            - strong [ref=e66]:
              - link "BLOG" [ref=e67] [cursor=pointer]:
                - /url: https://practicetestautomation.com/blog/
            - text: for engaging articles, speeches, and tutorials, and don’t miss our
            - link "COURSES" [ref=e68] [cursor=pointer]:
              - /url: https://practicetestautomation.com/courses/
              - strong [ref=e69]: COURSES
            - text: ", designed to enrich your learning experience."
          - generic [ref=e71]:
            - heading "Get a FREE XPath cheat sheet by Signing Up for our newsletter" [level=6] [ref=e75]
            - generic [ref=e77]:
              - textbox "Name *" [ref=e80]
              - textbox "Email Address *" [ref=e83]
            - button "Get XPath cheat sheet" [ref=e85]
            - paragraph [ref=e86]:
              - emphasis [ref=e87]:
                - generic [ref=e88]:
                  - text: We don’t spam! Read more in our
                  - link "privacy policy" [ref=e89] [cursor=pointer]:
                    - /url: https://practicetestautomation.com/privacy-policy/
    - contentinfo:
      - generic [ref=e91]:
        - text: © Copyright 2020
        - link "Practice Test Automation." [ref=e92] [cursor=pointer]:
          - /url: https://practicetestautomation.com/
        - text: All rights reserved |
        - link "Privacy Policy" [ref=e93] [cursor=pointer]:
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