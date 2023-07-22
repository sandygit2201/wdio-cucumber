import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';


When("I login with {string} and {string}", async (username, password) => {

    console.log(process.env.USERNAME)
    
    console.log(process.env.PASSWORD)

    await LoginPage.login(username, password)
});

Then("I should see a flash message saying {string}", async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

