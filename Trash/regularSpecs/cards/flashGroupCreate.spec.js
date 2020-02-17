
const { expect } = require('chai');
const {loginAsAdmin, logout} = require('../User/actions');
const { flashGroupSelectors, flashGroup  } = require('./flashGroup.data')




describe('FLASH GROUP CREATE', ()=> {

    it('Login as admin', () => {
        loginAsAdmin();
    });
    after('AFTER', () => {
        browser.pause(1000);
    });

    it('should click top menu Cards', () => {
        $(flashGroupSelectors.cardsSelector).click();
        browser.pause(300);
    });

    it('should click button Create new FlashGroup', () => {
        $(flashGroupSelectors.createNewFlashGroup).click();
        browser.pause(300);
    });

    it('should check if modal form is open', () => {
        const el = $(flashGroupSelectors.modalForm);
        expect(el.isDisplayed()).true;
        browser.pause(300);
    });

    it('should check if modal form title is correct', () => {
        const el = $(flashGroupSelectors.modalFromTitle);
        const actualText = el.getText();
        const expectedText = 'Create Flash Group';
        expect(actualText).equal(expectedText)
    });

    it('should fill out in group name field', () => {
        const el = $(flashGroupSelectors.modalFormGroupName);
        el.setValue(flashGroup.name)
    });

    it('should fill out in group description field', () => {
        const el = $(flashGroupSelectors.modalFormGroupDescription);
        el.setValue(flashGroup.description)
    });

    it('should submit form', () => {
        const el = $(flashGroupSelectors.submitForm);
        el.click();
        browser.pause(2000);
    });

    it('should check if first item in list is equal created ', () =>{
        const actual = $(flashGroupSelectors.firstFlashGroup).getText();
        const expected = flashGroup.name;
        expect(actual).eq(expected);
    });

    it('should verify if created title group is clickable', () => {
        const el = $(flashGroupSelectors.clickFirstTitle);
        el.click();
        browser.pause(300)
    });

    it('should check if group has correct title ', () =>{
        const actual = $(flashGroupSelectors.flashGroupH1).getText();
        const expected = flashGroup.name;
        expect(actual).eq(expected);
    });

    it('should log out', () => {
       logout();
    });
});