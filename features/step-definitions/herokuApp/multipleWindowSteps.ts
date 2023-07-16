import { Given,Then } from "@wdio/cucumber-framework";

Given("switch to new window",async()=>{
    console.log("Window Handles::" + (await browser.getWindowHandles()).values())
    await (await $('=Click Here')).click()
    console.log("Window Handles::" + (await browser.getWindowHandles()).values())
    let windowHandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandle[1])
    expect(await browser.getUrl()).toContain("windows/new")
   await browser.pause(1000)

})

Then("switch to parent window",async()=>{
    let windowHandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandle[0])
    await browser.pause(1000)
})

Given("create new and Swith to that window",async()=>{
    let hrefNewWindow = await $('=Click Here')
    hrefNewWindow.click()
    let windowHandle = await browser.getWindowHandles();
    
    await browser.switchToWindow(windowHandle[2])
    expect(await browser.getUrl()).toContain("windows/new")
    console.log("Window Handles with 3 windows::" + (await browser.getWindowHandles()).values())
   await browser.pause(1000)
})
