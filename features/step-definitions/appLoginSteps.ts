import { Given } from "@wdio/cucumber-framework";
import { setValue, getValue } from '@wdio/shared-store-service'
Given("print Login information",async()=>{
    
    console.log("userName::"+ await getValue('userName'))


})