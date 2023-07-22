import { Given } from "@wdio/cucumber-framework";

Given("verify custom command added", async()=>{

    await browser.login('admin','admin');

})