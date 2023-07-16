import { Given, When } from '@wdio/cucumber-framework';
import checkboxPage from '../../pageobjects/checkbox.page.js';



When("select first checkbox", async () => {
    await browser.pause(2000)
    await checkboxPage.selectFirstCheckbox()
    await browser.pause(5000)
});


