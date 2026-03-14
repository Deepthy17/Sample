import {test,expect} from '@playwright/test'

test.only("First test case",async({page})=>{
  
  await page.goto('https://demowebshop.tricentis.com/login')
  const pageTitle =await page.title();
  console.log(pageTitle);
  await expect(page).toHaveTitle('Demo Web Shop. Login')

  console.log('Title Verified');

  await page.locator("#Email").fill("deepthyravi17@gmail.com")

  await page.locator("#Password").fill("Deepthy17#")

  await page.locator("[id='Email']").fill("test@gmail.com")

  await page.locator ("[value='Log in']").click();

  await expect(page.locator("[value='Log in']")).toBeVisible()


  console.log(await page.locator("[class='validation-summary-errors'] span").textContent())

  await expect(await page.locator("[class='validation-summary-errors'] span")).toContainText("Login was unsuccessful. Please correct the errors and try again.")

  console.log(await page.locator("[class='validation-summary-errors'] span+ul li").textContent())
  await expect(await page.locator("[class='validation-summary-errors'] span+ul li")).toContainText("The credentials provided are incorrect")

  await expect(page.locator("//div[@class='validation-summary-errors']")).toBeVisible()
  //await expect(page.locator("//div[@class='validation-summary-errors']")).toBeVisible()

  const a = await page.locator("Email")
  a.fill("test2@gmail.com")



  console.log("It is verified");

})

  test("Second test case",async({page})=>{
    await page.goto('https://www.instagram.com/accounts/login/?hl=en');

})


