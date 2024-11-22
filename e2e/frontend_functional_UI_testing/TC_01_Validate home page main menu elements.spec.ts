import { test, expect } from '@playwright/test';

// TC_01 : Validate home page main menu elements
test('Validate home page main menu elements', async ({ page }) => {
  // navigate to home page
  await page.goto('https://www.polestar.com/se');
  console.log("Sucessfully navigate to home page");

  await expect(page.locator('#onetrust-policy-title')).toContainText('Welcome');
  await expect(page.locator('#onetrust-policy-text')).toContainText('We and our advertising, analytics, and social media partners use cookies and other technologies to optimise your experience, show relevant content, and analyse our traffic. Click “Accept” to, well, accept. You can change your preferences in “Cookie Settings”.');
  await expect(page.getByLabel('Welcome').locator('div').filter({ hasText: 'WelcomeWe and our advertising' }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Accept all' }).click();

  // validate home page main menu option
  await expect(page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Polestar 2"]')).toContainText('Polestar 2');
  await page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Polestar 2"]').hover();
  await expect(page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Polestar 3"]')).toContainText('Polestar 3');
  await page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Polestar 3"]').hover();
  await expect(page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Polestar 4"]')).toContainText('Polestar 4');
  await page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Polestar 4"]').hover();
  await expect(page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Laddning"]')).toContainText('Laddning');
  await page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Laddning"]').hover();
  await expect(page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Köpa"]')).toContainText('Köpa');
  await page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Köpa"]').hover();
  await expect(page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Mer"]')).toContainText('Mer');
  await page.locator('//*[@data-type="mega-menu-navigation"]//*[text()="Mer"]').hover();
 console.log("sucessfully varrify home page main menu option visible ")
  
await expect(page.locator('#YEbvymNVSXC97BE0p-lvqg')).toContainText('Upptäck');
await expect(page.locator('[id="\\31 43607403"]')).toContainText('Leveransklara bilar');
await expect(page.getByLabel('Besök Polestar').locator('span')).toContainText('Besök Polestar');
await expect(page.getByLabel('Ta plats i förarsätet').locator('span')).toContainText('Ta plats i förarsätet');
await expect(page.getByLabel('Polestar 2 som företagsbil').locator('span')).toContainText('Polestar 2 som företagsbil');
await expect(page.getByLabel('Aktuella erbjudanden', { exact: true })).toContainText('Aktuella erbjudanden');
await expect(page.getByLabel('Provkör Polestar 2, Polestar')).toContainText('Provkör Polestar 2, Polestar 3 och Polestar 4');
await expect(page.getByLabel('Track experiences')).toContainText('Track experiences');
await expect(page.getByLabel('Additionals-butiken')).toContainText('Additionals-butiken');
await expect(page.locator('#main-content')).toContainText('Få alla de senaste nyheterna från Polestar');
console.log("sucessfully varrify home page element section visiblility ")
await page.close();
});