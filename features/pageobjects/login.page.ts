class LoginPage{
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await $('#username').setValue(username);
        await $('#password').setValue(password);
        await $('button[type="submit"]').click();
    }

}

export default new LoginPage();
