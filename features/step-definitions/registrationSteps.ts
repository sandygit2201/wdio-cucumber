import {  Given } from "@wdio/cucumber-framework";

Given("Fill User Name and Email", async(dataTable)=>{

    let userData:any = dataTable.raw();
     let userInfo:any ={};
     userData.forEach((row: Array<string>)=>{
    
      userInfo[row[0]] = row[1]

    });
    console.log(userInfo);
    await (await $('[data-qa="signup-name"]')).setValue(userInfo.name);
    await (await $('[data-qa="signup-email"]')).setValue(userInfo.email);
    await (await $('//button[text()="Signup"]')).click();
    
    expect(await browser.getUrl()).toContain('/signup');
    await browser.pause(5000)
   

})

Given("Fill Account information",async(dataTable)=>{


})