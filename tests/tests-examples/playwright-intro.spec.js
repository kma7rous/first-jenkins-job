// const {test} = require('@playwright/test');
import { test } from '@playwright/test';

test("Opens google", async ({page}) => {

    // navigate to google.com
    await page.goto("https://google.com");
    
    await page.waitForTimeout(3000);
});

