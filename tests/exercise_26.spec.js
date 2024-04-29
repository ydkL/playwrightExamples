// import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
// import fetch from 'cross-fetch'; // required 'fetch'

// PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
//   const buffer = blocker.serialize();
//   const restoredBlocker = PlaywrightBlocker.deserialize(buffer);
//   // `restoredBlocker` is deep-equal to `blocker`!
// });


// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Scroll up page to top
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

const {test, expect} = require('@playwright/test')

test('Verify Scroll Up without -Arrow- button and Scroll Down functionality', async ({ page }) => { 
    await page.goto('http://automationexercise.com');
    await expect(page).toHaveTitle('Automation Exercise');

    // await expect(page.getByText('SUBSCRIPTION')).toBeInViewport();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await expect(page.getByText('SUBSCRIPTION')).toBeInViewport();

    await page.evaluate(() => window.scrollTo(0, 0));

    await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeInViewport();
    
})