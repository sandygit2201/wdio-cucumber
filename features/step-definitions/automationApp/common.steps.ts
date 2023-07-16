import { Given, Then } from "@wdio/cucumber-framework";


Given ("open App",async()=>{

    await browser.url('/login')

})

Then("print data", async()=>{
    (await $('[data-qa="signup-name"]')).setValue(worldObj.userName)
    browser.pause(5000)
})