import { Given } from "@wdio/cucumber-framework";
import page from "../pageobjects/page.js";
import allureReporter from '@wdio/allure-reporter'

Given("I am on the {string} page",async (requiredPage)=>{
    await page.open(requiredPage)
})

Given ("Add an element",async()=>{

    await browser.pause(1000);
    (await $('button=Add Element')).click();
})

Given ("Pause for 5 sec",async()=>{

    await browser.pause(2000);
    
})

Given("Delete all elements",async()=>{

    const elements = $$('[id="elements"] button')
    elements.forEach(async (ele)=>{
        await ele.click()

    })

})

Given("select an {string} in dropdown",async(option)=>{
    await browser.pause(2000);
    (await $('#dropdown')).selectByVisibleText(option)
    await browser.pause(2000);
})

Given("Print data in shadowdom",async()=>{


    console.log("$$$$$$$$$$$$$$$")
    console.log("$$$$$$$$$$$$$$$")
    console.log((await $('[slot="my-text"]')).getText())

    console.log("$$$$$$$$$$$$$$$")
    console.log("$$$$$$$$$$$$$$$")
})

Given("open login page", async()=>{

    await browser.url('/login')
    expect(await browser.getUrl()).toContain('login')

})

Given('Add test story {string}', async(storyName)=>{

await allureReporter.addStory(storyName)

})