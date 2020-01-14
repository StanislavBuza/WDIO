const { expect } = require('chai');

describe('stage.pasv.us page', () => {
    // before.url( () => {
    //
    // });

    it('should have the right title', () => {
        browser.url('http://stage.pasv.us/user/register')
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

    it('should choose English level dropdown', function () {
      const element = $('form select[name="englishLevel"]')
    });

    it('should click Submit button', function () {
        const element = $('form button[type="submit"]')
        element.click();
        browser.pause(5000)
    });

    // it('should have a correct header', () => {
    //     const actualTile = $('h1').getText();
    //     const expectedTile = 'User Register';
    //     expect(actualTile).equal(expectedTile);
    // });

    // it('should fill up last name field', () => {
    //     const element = $('form input[name ')
    //     const expectedTile = 'User Register';
    //     expect(actualTile).equal(expectedTile);
    // });

    // it('should has a correct description', function () {
    //     const actual = $('p').getText();
    //     const expected = 'Profiles with fictitious or dummy data will be deleted.';
    //     expect(actual).equal(expected);
    // });
    //
    // it('should has a correct button text', function () {
    // const actual = $('form button').getText();
    // const expected = 'Submit';
    // expect(actual).equal(expected);
    // });

});


// Model
// it('should has a correct tile', function () {
//     const actual = $('h1').getText();
//     const expected = 'User Register';
//     expect(actual).equal(expected);
// });