import { expect } from 'chai';
import LoginPage from "../login/LoginPage";
import ProfilePage from "./ProfilePage";



describe('PROFILE',  () => {
    before( () => {
       LoginPage.login();
    });

    it('should have right title',  () => {
        browser.pause(2000);
        expect(ProfilePage.h1.getText()).equal('Stan B')
    });


});