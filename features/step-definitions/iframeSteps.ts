import { Given } from "@wdio/cucumber-framework";

Given("Type Text in iframe",async()=>{
// iframe element 
    let iframe = await browser.$('#mce_0_ifr');

    await browser.switchToFrame(iframe);
    let iframeTextArea = await $('#tinymce')
    // await iframeTextArea.clearValue()
    await iframeTextArea.setValue("Hello All");
    await browser.pause(5000);
    browser.switchToParentFrame();

})
Given("Get text from right iframe",async()=>{

    let topFrame = await $('frame[name="frame-top"]')
    await browser.switchToFrame(topFrame)
    let rightFrame = await $('[name="frame-right"]')
    await browser.switchToFrame(rightFrame)
    let textInRightFrame = (await (await $("//body[contains(text(),'RIGHT')]")).getText()).valueOf()
    console.log("Text in Right IFrame::" + textInRightFrame)

})



Given("Get text from middle iframe",async()=>{

    let topIframe = await browser.$('[name="frame-top"]');
    await browser.switchToFrame(topIframe);
    let middleIframe = await browser.$('[name="frame-middle"]');
    await browser.switchToFrame(middleIframe)
    let text = (await (await $('#content')).getText()).valueOf();
    console.log("Text::"+text)
    expect(text).toEqual('MIDDLE')
    await browser.pause(5000);
    browser.switchToParentFrame();

})