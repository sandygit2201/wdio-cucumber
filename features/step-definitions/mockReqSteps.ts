import { Given } from "@wdio/cucumber-framework";

Given("mock get user request",async()=>{

    let userMock = await browser.mock("**/users/2",{method:'GET'})
    await browser.url("https://reqres.in/")

     userMock.respond({
        "data": {
            "id": 2,
            "email": "w2a@mock.comn",
            "first_name": "w2a",
            "last_name": "w2a",
            "avatar": "https://www.google.com"
        },
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    })

    await browser.refresh()


    await (await $('[data-id="users-single"]')).click()

    await browser.pause(10000)


    

})