import { faker } from "@faker-js/faker";
import { getValue, setValue } from "@wdio/shared-store-service";
class LoginPage {

    async enterUserNameAndEmail(){
        let userName = faker.person.fullName();
        let userEmail = faker.internet.email();
        await (await $('[data-qa="signup-name"]')).setValue(userName);
        await (await $('[data-qa="signup-email"]')).setValue(userEmail);
        await (await $('//button[text()="Signup"]')).click();
      
        await setValue("userName", userName);
        await setValue("userEmail", userEmail);
      
        await expect(await browser.getUrl()).toContain("/signup");
        await browser.pause(1000);
    }


}

export default new LoginPage()