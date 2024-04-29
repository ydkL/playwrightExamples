
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

const {test, expect} = require('@playwright/test')

test('Register User', async ({ page }) => {
    await page.goto('http://automationexercise.com');
    await expect(page).toHaveTitle('Automation Exercise');

    await page.locator('text =Signup / Login').first().click();

    await page.waitForSelector('text=New User Signup!');

    var user_name = (Math.random() + 1).toString(36).substring(7);

    await page.getByPlaceholder('Name').type(user_name);

    var r = (Math.random() + 1).toString(36).substring(7);

    var randomEmail = `${r}@gnail`;

    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').type(randomEmail)

    await page.getByRole('button', { name: 'Signup' }).click();

    await expect(page.getByText('Enter Account Information')).toBeVisible();

    await page.getByLabel('Mr.').check();

    var password = (Math.random() + 1).toString(36).substring(7);

    await page.getByLabel('Password *').type(password);

    await page.locator('#days').selectOption('10');

    
    await page.locator('#months').selectOption('January');

    await page.locator('#years').selectOption('2003');

    await page.getByText('Sign up for our newsletter!').check();

    var name = (Math.random() + 1).toString(36).substring(7);

    await page.getByLabel('First name *').type(name);

    var last_name = (Math.random() + 1).toString(36).substring(7);

    await page.getByLabel('Last name *').type(last_name);

    await page.getByLabel('Address * (Street address, P.').type('Ankara - Yenimahalle');

    await page.getByLabel('Country *').selectOption('India');

    await page.getByLabel('State *').type('Ankara');

    await page.getByLabel('City  *').type('Yenimahalle');

    await page.locator('#zipcode').type('06560');

    await page.getByLabel('Mobile Number *').type('+904567853212');

    await page.getByRole('button', { name: 'Create Account' }).click();

    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();

    await page.getByRole('link', { name: 'Continue' }).click();

    await expect(page.getByText(`Logged in as ${user_name}`)).toBeVisible();

    await page.getByRole('link', { name: ' Delete Account' }).click();

    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
})

