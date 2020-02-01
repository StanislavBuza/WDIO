const { expect } = require('chai');
const { URL_LOGIN } = require('./register.data');

describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('29stasik@gmail.com');
        $('form input[name="password"]').setValue('11111');
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });

  it('should redirect to Diary create page', () => {
      const diary = $('.nav-link=Diary');
      diary.click();
      const createDayReport = $('.btn=Create day report');
      createDayReport.click();
      browser.pause(5000);

  });
  //
  //   it('should create Diary Day report', () => {
  //       $('form input[label="I need help"]').click();
  //       $('form input[label="I understood everything"]').click();
  //       $('form input[label="Helped classmates"]').click();
  //       $('form input[label="Watched lectures"]').click();
  //       $('form input[label="Read documentation"]').click();
  //       $('form input[label="Code practice"]').click();
  //       $('form input[label="Quiz practice"]').click();
  //       $('form input[label="Interview preparation"]').click();
  //       $('form input[label="Recruiter phone call"]').click();
  //       $('form input[label="Interview technical screen"]').click();
  //       $('form input[label="Interview onsite"]').click();
  //       $('form input[label="Got a job offer"]').click();
  //       $('form select').selectByIndex(1);
  //       $('form input[name="hours"]').setValue("8");
  //       $('form textarea[name="description"]').setValue("Today I worked very hard, like really hard");
  //       $('form button[type="submit"]').click();
  //       browser.pause(10000);
  //
  //   });



});
