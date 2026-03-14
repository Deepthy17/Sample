import {test,expect} from '@playwright/test'
test('First test case', async({page})=>{

  await page.goto("https://www.instagram.com/accounts/login/?hl=en");
  const pageTitle=await page.title();
  console.log(pageTitle);
  await expect(page).toHaveTitle('Instagram');

  console.log('Title. Verified');
  await page.close();

})