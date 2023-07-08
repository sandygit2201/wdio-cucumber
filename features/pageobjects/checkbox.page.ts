class CheckBoxPage  {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async selectFirstCheckbox () {
        (await $("//input[1]")).click()
        
    }

}

export default new CheckBoxPage();
