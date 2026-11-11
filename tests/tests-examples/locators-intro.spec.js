import { test } from '@playwright/test';

// navigate to google.com and get the title of the page
test('Getting the title of the page', async ({ page }) => {
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@class = 'gLFyf']");

    // await searchBox.type("CYDEO")
    await searchBox.fill("CYDEO")

    await page.waitForTimeout(3000);

    await searchBox.press("Enter")
});


//<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id"
//  autofocus="" maxlength="2048" aria-label="Search" placeholder="" 
// aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off"
//  autocorrect="off" id="ti6dpd" name="q" role="combobox" rows="1" 
// spellcheck="false" data-ved="2ahUKEwj67ca5ot6XAxXlFlkFHSQHNQIQ39UDegQIABAR"></textarea>


//textarea[@class='gLFyf']