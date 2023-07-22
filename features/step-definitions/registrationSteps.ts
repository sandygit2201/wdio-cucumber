import { Given } from "@wdio/cucumber-framework";
import { faker } from "@faker-js/faker";
import { getValue, setValue } from "@wdio/shared-store-service";

Given("Fill random User Name and Email and move to next page", async () => {
  let userName = faker.person.fullName();
  let userEmail = faker.internet.email();
  await (await $('[data-qa="signup-name"]')).setValue(userName);
  await (await $('[data-qa="signup-email"]')).setValue(userEmail);
  await (await $('//button[text()="Signup"]')).click();

  await setValue("userName", userName);
  await setValue("userEmail", userEmail);

  await expect(await browser.getUrl()).toContain("/signup");
  await browser.pause(1000);
});

Given("Fill Account information", async (dataTable) => {
  let rawData = dataTable.raw();
  let accountInfo: any = {};
  rawData.forEach((row) => {
    accountInfo[row[0]] = row[1];
  });

  console.log('Account  info '+ JSON.stringify(accountInfo))

  if (accountInfo.hasOwnProperty("title")) {
    if (accountInfo["title"] == "mr")
      await (await $("[id ='id_gender1']")).click();
    else if (accountInfo["title"] == "mrs")
      await (await $("[id ='id_gender2']")).click();
  }


  if (accountInfo.hasOwnProperty("password")) {
    // const password = faker.location.country()
    const password = accountInfo.password
    await (await $("#password")).setValue(password);

  await setValue("password", password);

  }

  if (accountInfo.hasOwnProperty("dobDate")) {
    await (
      await $('[data-qa="days"]')
    ).selectByVisibleText(accountInfo.dobDate);
  }
  if (accountInfo.hasOwnProperty("dobMonth")) {
    await (
      await $('[data-qa="months"]')
    ).selectByVisibleText(accountInfo.dobMonth);
  }
  if (accountInfo.hasOwnProperty("dobYear")) {
    await (
      await $('[data-qa="years"]')
    ).selectByVisibleText(accountInfo.dobYear);
  }
});

Given("Fill Address information", async (dataTable) => {
  let rawData = dataTable.raw();
  let addressInfo: any = {};
  rawData.forEach((row) => {
    addressInfo[row[0]] = row[1];
  });

  console.log('Address info '+ JSON.stringify(addressInfo))

  if (addressInfo.hasOwnProperty("firstName"))
    await (await $("#first_name")).setValue(addressInfo.firstName);

  if (addressInfo.hasOwnProperty("lastName"))
    await (await $("#last_name")).setValue(addressInfo.lastName);

  if (addressInfo.hasOwnProperty("company"))
    await (await $("#company")).setValue(addressInfo.company);

  if (addressInfo.hasOwnProperty("address1"))
    await (await $("#address1")).setValue(addressInfo.address1);

  if (addressInfo.hasOwnProperty("address2"))
    await (await $("#address2")).setValue(addressInfo.address2);

  if (addressInfo.hasOwnProperty("country"))
    await (await $("#country")).selectByVisibleText(addressInfo.country)

  if (addressInfo.hasOwnProperty("state"))
    await (await $("#state")).setValue(addressInfo.state);

  if (addressInfo.hasOwnProperty("city"))
    await (await $("#city")).setValue(addressInfo.city);

  if (addressInfo.hasOwnProperty("zipcode"))
    await (await $("#zipcode")).setValue(addressInfo.zipcode);

    if (addressInfo.hasOwnProperty("mobile")){

      await (await $("#mobile_number")).setValue(addressInfo.mobile);  
      // using through faker
      // await (await $("#mobile_number")).setValue(faker.phone.number('+1 ### #### ####'));  

    }
});

Given("Create Account", async () => {

  await (await $('button[data-qa="create-account"]')).click()

  expect(await $('p=Congratulations! Your new account has been successfully created!'))
  .toBeDisplayed()

});

Given('Print user credentials',async()=>{

  const userName =  await getValue("userName");
  const Email  = await getValue('userEmail')
  const password = await getValue('password')
  console.log('USERNAME::'+userName)
  console.log('EMAIL::'+Email)
  console.log('PASSWORD::'+password)

})
