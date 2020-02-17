import { expect } from 'chai';
import LoginPage from "./LoginPage";
import ProfilePage from "../profile/ProfilePage";


describe('LOGIN (negative)',  () => {
    it('should open login Page', () => {
        browser.pause(3000);
        LoginPage.open()
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
    });

    it('should fill out email field',  () => {
        LoginPage.email.setValue('29stasik@gmail.com');
    });

    it('should fill out password field',  () => {
        LoginPage.password.setValue('111113456')
    });

    it('should submit form ',  () => {
        LoginPage.submitBtn.click();
        browser.pause(3000);
    });

    it('should check h1 text ',  () => {
        expect(LoginPage.h1.getText()).eq('User Login')
    });

});