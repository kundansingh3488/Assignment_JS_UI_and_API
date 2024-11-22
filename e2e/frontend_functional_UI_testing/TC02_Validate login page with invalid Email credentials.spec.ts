import { test, expect } from '@playwright/test';

// Validate Email login page with invalid Email credentials
test('TC02_Validate login page with invalid Email credentials', async ({ page }) => {
  // navigate to the login page.
  await page.goto('https://polestarid.eu.polestar.com/PolestarLogin/login?resumePath=4Hyuc1oSLd&client_id=l3oopkc_10');
  await expect(page.getByRole('heading')).toContainText('Login');
  await expect(page.locator('section')).toContainText('Email address');
  await expect(page.locator('section')).toContainText('Phone number');
  // Enter Invalid username text area
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('abcd@gmail.com');
   // Enter Invalid  passowrd text area
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('abcd@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  // verify error massage
  await expect(page.getByRole('heading')).toContainText('We\'re sorry!');
  await expect(page.locator('#errorCodeMsg')).toContainText('Please return to where you first chose to sign in, and initiate a new sign in from there.');
  await page.close();
});