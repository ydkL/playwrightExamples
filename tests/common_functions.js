const { expect } = require('@playwright/test')

export class CommonFunc {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.email = NaN;
      this.password = NaN;
      this.user_name = NaN;
    }
  
    async goto() {
      await this.page.goto('http://automationexercise.com');
    } 

    getusername(){
        return this.user_name;
    }

    getemail(){
        return this.email;
    }

    getpassword(){
        return this.password;
    }
    /**
     *
     */
    async signUp() {
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();

        await expect(this.page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

        this.user_name = (Math.random() + 1).toString(36).substring(7);

        await this.page.getByPlaceholder('Name').type(this.user_name);

        this.email = (Math.random() + 1).toString(36).substring(7) + '@gnail' ;

        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').type(this.email);

        await this.page.getByRole('button', { name: 'Signup' }).click();

        await expect(this.page.getByText('Enter Account Information')).toBeVisible();

        this.password = (Math.random() + 1).toString(36).substring(7);

        await this.page.getByLabel('Password *').type(this.password);

        await this.page.locator('#days').selectOption('10');

        await this.page.locator('#months').selectOption('January');

        await this.page.locator('#years').selectOption('2003');

        await this.page.getByText('Sign up for our newsletter!').check();

        let name = (Math.random() + 1).toString(36).substring(7);

        await this.page.getByLabel('First name *').type(name);

        let last_name = (Math.random() + 1).toString(36).substring(7);

        await this.page.getByLabel('Last name *').type(last_name);
        
        let city = (Math.random() + 1).toString(36).substring(7);

        await this.page.getByLabel('Address * (Street address, P.').type(city);

        await this.page.getByLabel('Country *').selectOption('India');

        await this.page.getByLabel('State *').type(city);

        await this.page.getByLabel('City  *').type(city);

        await this.page.locator('#zipcode').type('012345');

        let phone_number = (Math.random() + 1).toString(36).substring(11);

        await this.page.getByLabel('Mobile Number *').type(phone_number)

        await this.page.getByRole('button', { name: 'Create Account' }).click()

        await expect(this.page.getByText('Account Created!')).toBeVisible();

        await this.page.getByRole('link', { name: 'Continue' }).click();    
    } 
  }


