const {URL_LOGIN} = require('../register/register.data');

function loginAsAdmin(){
    browser.url(URL_LOGIN);
    $('form input[name="email"]').setValue('29stasik@gmail.com');
    $('form input[name="password"]').setValue('11111');
    $('form button[type="submit"]').click();
    browser.pause(1000);
}

function logout(){
    browser.url(URL_LOGIN);
    $('//a[@class="dropdown-toggle nav-link"]').click();
    $('//button[contains(text(), "Logout")]').click();
}

module.exports = {loginAsAdmin, logout};