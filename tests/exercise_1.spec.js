const { test, expect } = require('@playwright/test')
const { CommonFunc } = require('./common_functions')

test.describe('sigup tests', () => {
    let commonFuncs;
    test.beforeEach(async ({ page }) => {
        
    })

    test('Test Case 1 : Register User with Func', async ({ page }) => {
        commonFuncs = new CommonFunc(page);   
        await commonFuncs.goto();
        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
        await expect(page.getByRole('link', { name: ' Home' })).toHaveCSS("color", "rgb(255, 165, 0)");
        await commonFuncs.signUp()

        let expected_button_text = 'Logged in as ' + commonFuncs.getusername();
        await expect(page.getByText(expected_button_text)).toBeVisible();

        await page.getByRole('link', { name: ' Delete Account' }).click();

        await expect(page.getByText('Account Deleted!')).toBeVisible();

        await page.getByRole('link', { name: 'Continue' }).click();
    })


})



