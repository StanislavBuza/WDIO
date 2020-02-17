import Page from "../Page";

class LoginPage extends Page{
   // email = $('//input[@name=email]')
    get email () {
        return $('//input[@name="email"]');
    }

    get password () {
        return $('//input[@name="password"]');
    }

    get submitBtn () {
        return $('//button[@type="submit"]');
    }

    get h1 () {
        return $('//h1');
    }

    login () {
        this.open();
        this.email.setValue('29stasik@gmail.com');
        this.password.setValue('11111');
        this.submitBtn.click();
        browser.pause(2000);
    }

    open(){
        super.open('https://stage.pasv.us/user/login')
    }
}

export default new  LoginPage();