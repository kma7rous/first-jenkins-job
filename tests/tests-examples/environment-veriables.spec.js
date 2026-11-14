import { test, expect } from '@playwright/test';

test('@env_Test environment variables test', async ({ page }) => {

    console.log('Username is ' + process.env.PRACTICE_USERNAME);
    console.log('Password is ' + process.env.PRACTICE_PASSWORD);


    
  // Your test code here
});

test('Bypass Authentication by Encoding the credentials base64 format', async ({ page }) => {
    
    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString('base64');

    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`});

    await page.goto('https://the-internet-5chk.onrender.com/basic_auth');
   
    await page.waitForTimeout(3000);

 });
