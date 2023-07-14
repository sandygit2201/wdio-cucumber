import { Given } from "@wdio/cucumber-framework";

Given("download file {string}",async(fileName)=>{

    let fileLinkText = await $(`=${fileName}`)
    await fileLinkText.click()
    await browser.pause(10000)

})