# Jenkins_Playwright

--------------------Jenkins --------------
1. CI using Jenkins | Jenkins Setup & Integration with Local Playwright Project 
2. download node, java, jenkins (https://www.jenkins.io/doc/book/installing/linux/#debianubuntu)
3. 1. cd /home/user/Documents/Jenkins_Playwright
   2. npm ci
   3. cd /home/juli/Documents/Jenkins_Playwright
   4. npx playwright install --with-deps (=> to download playwright browser installation)
   5. cd /home/juli/Documents/Jenkins_Playwright
   6. npx playwright test

## Steps
1. Build Steps
2. Triggers -> build periodically. (15 4 */3 * *)
3. Report (Dashboard -> Manage Jenkins -> Plugins -> HTML Publisher )
4. Script Console (=> to directly see the report)
5. This project is parameterized => (to user some parameter, npx playwright test --project=%Browser%)
