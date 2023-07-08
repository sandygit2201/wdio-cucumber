import { Given } from "@wdio/cucumber-framework";
import page from "../pageobjects/page.js";

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

    // const content = await $("#content")
    // const shadowElement = await content.shadow$('[slot="my-text"]')
    // console.log("$$$$$$$$$$$$$$$")
    // console.log(await shadowElement.getText())

    console.log("$$$$$$$$$$$$$$$")
    console.log("$$$$$$$$$$$$$$$")
    console.log((await $('[slot="my-text"]')).getText())

    console.log("$$$$$$$$$$$$$$$")
    console.log("$$$$$$$$$$$$$$$")


})