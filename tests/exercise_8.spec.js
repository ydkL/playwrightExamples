const { test, expect } = require('@playwright/test')

test('Verify All Products and product detail page', async ({ page }) => {

    await page.goto('http://automationexercise.com');
    await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();

    await page.getByRole('link', { name: ' Products' }).click();

    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();

    await expect(page.getByText('All Products  Added! Your')).toBeVisible();

    await page.locator('.choose > .nav > li > a').first().click();

    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

    // Product Name
    await expect(page.locator('xpath=/html/body/section/div/div/div[2]/div[2]/div[2]/div/h2')).toBeVisible();

    //Price
    await expect(page.locator('xpath=/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/span')).toBeVisible();

    await expect(page.getByText('Availability:')).toBeVisible();

    await expect(page.getByText('Condition:')).toBeVisible();

    await expect(page.getByText('Brand:')).toBeVisible();

})