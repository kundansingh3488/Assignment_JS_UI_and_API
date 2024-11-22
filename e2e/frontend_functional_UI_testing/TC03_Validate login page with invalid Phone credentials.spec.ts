import { test, expect } from '@playwright/test';

// Validate login page with invalid Phone credentials
test('TC03_Validate login page with invalid Phone credentials', async ({ page }) => {
  // navigate to the login page.// navigate to the login page.
  await page.goto('https://polestarid.eu.polestar.com/PolestarLogin/login?resumePath=4Hyuc1oSLd&client_id=l3oopkc_10');
  await page.locator('div').filter({ hasText: 'Email address Phone number' }).locator('span').nth(1).click();
  // change country code 
  await page.locator('#dialCode').selectOption('91');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  // Enter Invalid phone no into  text area
  await page.getByRole('textbox', { name: 'Phone number' }).fill('9876543210');
    // Enter Invalid password into text area
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('abcd@4321');
  // select login button
  await page.getByRole('button', { name: 'Login' }).click();
  // varrify error massage 
  await expect(page.getByRole('heading')).toContainText('We\'re sorry!');
  await expect(page.locator('#errorCodeMsg')).toContainText('Please return to where you first chose to sign in, and initiate a new sign in from there.');
   // varrify Polestar logo name on error massage page
  await expect(page.getByRole('link', { name: 'Polestar' })).toBeVisible();
  await page.close();
});