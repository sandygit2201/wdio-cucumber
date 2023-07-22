
export function commands(): void {

    browser.addCommand('login$',async(userName,password)=>{

        await browser.url('https://the-internet.herokuapp.com/login');
        await (await $('#username')).setValue(userName);
        await (await $('#password')).setValue(password);
        await (await $('button[type="submit"]')).click()


    })

}



        

