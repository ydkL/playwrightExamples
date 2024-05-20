import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.keytours.com/');
  await expect(page.locator('#slcTripFinderCountry').getByRole('combobox')).toBeVisible();

  await page.locator('#slcTripFinderCountry').getByRole('combobox').type('Turkey');

  await page.getByRole('option', { name: '_ Turkey' }).getByRole('paragraph').click();

  await page.locator('#slcTripFinderCategory').getByRole('combobox').click();

  await page.getByRole('option', { name: '_ Private Journeys' }).locator('div').click();

  await page.getByLabel('Trip Finder').locator('button').click();

  await page.waitForTimeout(4000);

  await expect(page.locator('div[class="tour-single-card mb-3"]')).toHaveCount(6);

  await page.getByRole('link', { name: 'Customize & Price' }).first().click();

  // Switch to New Tab
  let pagePromise = page.waitForEvent('popup');
  let newTab = await pagePromise;
  await newTab.waitForLoadState();
  newTab.setDefaultTimeout(40000);

  await expect(newTab.getByText('Select Date check')).toBeVisible();

  await expect(newTab.getByText('Air Details check')).toBeVisible();

  await expect(newTab.getByText('Customize check')).toBeVisible();

  await expect(newTab.getByText('Summary check')).toBeVisible();

  await expect(newTab.getByText('My Cart check')).toBeVisible();

  await newTab.locator('#flightDepartureCity').getByRole('combobox').type('istan');

  await page.waitForTimeout(3000);

  await newTab.keyboard.press('Enter');

  await newTab.locator('#slcDate').getByRole('combobox').type('10/10/2024');

  await newTab.keyboard.press('Enter');

  await newTab.locator('#detail-col-left').click();

  await newTab.getByRole('link', { name: 'Customize your trip' }).click();

  //Verify Date Selection is completed
  await expect(newTab.getByText('Select Date check')).toHaveClass('flex-fill doneWizardTab');

  //Verify Air Details is in progress
  await expect(newTab.getByText('Air Details check')).toHaveClass('flex-fill activeWizardTab');

  await newTab.getByRole('link', { name: 'Continue without flight' }).first().click();

  //Verify Air Details is in progress
  await expect(newTab.getByText('Customize check')).toHaveClass('flex-fill activeWizardTab');

  await expect(newTab.getByRole('link', { name: 'Modify Tour' })).toBeVisible();

  await expect(newTab.getByText('Customize your itinerary')).toBeVisible();

  await newTab.waitForTimeout(20000);

  await expect(newTab.getByRole('button', { name: 'Istanbul Starts on Thu, 10' })).toBeVisible();

  await newTab.getByRole('link', { name: 'Continue' }).click();

  await expect(newTab.getByText('Customize check')).toHaveClass('flex-fill doneWizardTab');

  await expect(newTab.getByText('Summary check')).toHaveClass('flex-fill activeWizardTab');

  await newTab.getByRole('link', { name: 'add to cart' }).click();

  await expect(newTab.getByRole('heading', { name: 'My Cart' })).toBeVisible();

  await expect(newTab.locator('div[class="my-cart-single-item"]')).toHaveCount(5);

  await newTab.getByRole('link', { name: 'Save my cart' }).click();

  await expect(newTab.getByText('Please enter a name for yout')).toBeVisible();

  await newTab.getByRole('button', { name: 'OK' }).click();

  await page.close({ runBeforeUnload: true });
});