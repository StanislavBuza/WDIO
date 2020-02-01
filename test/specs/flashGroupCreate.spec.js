
const { expect } = require('chai');
const { URL_LOGIN } = require('./register.data');




describe('FLASH GROUP CREATE', ()=> {

    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('29stasik@gmail.com');
        $('form input[name="password"]').setValue('11111');
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });
    after('AFTER', () => {
        browser.pause(300);
    });

    it('should click top menu Cards', () => {
        $('//div[@id="site-menu"]//a[@qa="cards-link"]').click();
        browser.pause(300);
    });

    it('should click button Create new FlashGroup', () => {
        $('//button[@qa="flash-create-new-group"]').click();
        browser.pause(300);
    });

    it('should check if modal form is open', () => {
        const el = $('//div[contains(@class, "sidepanel")]');
        expect(el.isDisplayed()).true;
    });

    it('should check if modal form title is correct', () => {
        const el = $('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]');
        const actualText = el.getText();
        const expectedText = 'Create Flash Group';
        expect(actualText).equal(expectedText)
    });

    it('should fill out in group name field', () => {
        const el = $('//div[contains(@class, "sidepanel")]//input[@name="name"]');
        el.setValue('My Group description123')
    });

    it('should fill out in group name field', () => {
        const el = $('//div[contains(@class, "sidepanel")]//input[@name="description"]');
        el.setValue('My Group description123.........')
    });

    it('should submit form', () => {
        const el = $('//div[contains(@class, "sidepanel")]//button[@type="submit"]');
        el.click();
    });

    it('should first item in list be equal created ', () =>{
        const actual = $('//div[@qa="flash-group-list "]//h4/a').getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });

    it('should first item in list be equal created ', () =>{
        const actual = $('//div[@qa="flash-group-list "]//h4/a').getText();
        const expected = 'My group name 123.........';
        expect(actual).eq(expected);
    });

    it('should verify created title group is clickable', () => {
        const el = $('//div[@qa="flash-group-list "]//h4/a');
        el.click();
        browser.pause(300)
    });

    it('should ckliked group has correct title ', () =>{
        const actual = $('//h1').getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });


});