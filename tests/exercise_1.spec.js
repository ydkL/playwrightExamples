const { test, expect } = require('@playwright/test')
const { CommonFunc } = require('./common_functions')

test.describe('sigup tests', () => {
    let commonFuncs;
    test.beforeEach(async ({ page }) => {
        
    })

    test('Test Case 1 : Register User', async ({ page }) => {

        await page.goto('http://automationexercise.com');

        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

        await expect(page.getByRole('link', { name: ' Home' })).toHaveCSS("color", "rgb(255, 165, 0)");

        await page.getByRole('link', { name: ' Signup / Login' }).click();

        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

        let user_name = (Math.random() + 1).toString(36).substring(7);

        await page.getByPlaceholder('Name').type(user_name);

        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').type("yusufdudakli@gmail.com");

        await page.getByRole('button', { name: 'Signup' }).click();

        await expect(page.getByText('Enter Account Information')).toBeVisible();

        let password = (Math.random() + 1).toString(36).substring(7);

        await page.getByLabel('Password *').type(password);

        await page.locator('#days').selectOption('10');

        await page.locator('#months').selectOption('January');

        await page.locator('#years').selectOption('2003');

        await page.getByText('Sign up for our newsletter!').check();

        let name = (Math.random() + 1).toString(36).substring(7);

        await page.getByLabel('First name *').type(name);

        let last_name = (Math.random() + 1).toString(36).substring(7);

        await page.getByLabel('Last name *').type(last_name);

        await page.getByLabel('Address * (Street address, P.').type('Ankara - Yenimahalle');

        await page.getByLabel('Country *').selectOption('India');

        await page.getByLabel('State *').type('Ankara');

        await page.getByLabel('City  *').type('Yenimahalle');

        await page.locator('#zipcode').type('06560');

        let phone_number = (Math.random() + 1).toString(36).substring(11);

        await page.getByLabel('Mobile Number *').type(phone_number)

        await page.getByRole('button', { name: 'Create Account' }).click()

        await expect(page.getByText('Account Created!')).toBeVisible();

        await page.getByRole('link', { name: 'Continue' }).click();

        let expected_button_text = 'Logged in as ' + user_name;
        await expect(page.getByText(expected_button_text)).toBeVisible();

        await page.getByRole('link', { name: ' Delete Account' }).click();

        await expect(page.getByText('Account Deleted!')).toBeVisible();

        await page.getByRole('link', { name: 'Continue' }).click();

    })

    test('Test Case 1 : Register User with Func', async ({ page }) => {
        commonFuncs = new CommonFunc(page);   
        commonFuncs.goto();
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



