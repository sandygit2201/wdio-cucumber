import { Given } from "@wdio/cucumber-framework";

Given("Handle js prompt alert new", async ()=>{
let alertButton =  await $("button=Click for JS Prompt")
 await alertButton.click()
 let TextOnAlertWindow = await browser.getAlertText()
 console.log("Text on Alert Window::" + TextOnAlertWindow)

 await browser.sendAlertText("Hello all")
 await browser.acceptAlert()
 expect(await $('p=You entered: Hello All')).toBeDisplayed()
 await browser.pause(5000)


})

Given("Handle js alert",async()=>{

    await (await $('button=Click for JS Alert')).click()
    await browser.pause(3000)
    let alertText = await browser.getAlertText()
    console.log(alertText)
    await browser.acceptAlert()
    await browser.pause(3000)
    expect(await $("p=You successfully clicked an alert")).toBeDisplayed()

})

Given("Handle Confirm alert",async()=>{

    await (await $('button=Click for JS Confirm')).click()
    await browser.pause(3000)
    let alertText = await browser.getAlertText()
    console.log("$$$$$$$$$$$$$$$$$$")
    console.log("$$$$$$$$$$$$$$$$$$")
    console.log(alertText)
    await browser.acceptAlert()
    await browser.pause(3000)
    expect(await $("p=You clicked: Ok")).toBeDisplayed()

})

Given("Handle js prompt alert",async()=>{

    await (await $('button=Click for JS Prompt')).click()
    let alertText = await browser.getAlertText()
    console.log("$$$$$$$$$$$$$$$$$$")
    console.log("$$$$$$$$$$$$$$$$$$")
    console.log(alertText)
    await browser.sendAlertText("Hello world")
    await browser.acceptAlert()
    
    expect(await $("p=You entered: Hello world")).toBeDisplayed()

})