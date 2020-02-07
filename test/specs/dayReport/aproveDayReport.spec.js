const { expect } = require('chai');
const {loginAsAdmin, logout } = require('../User/actions');


describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
       loginAsAdmin();
    });

  it('should redirect to Diary create page', () => {
      const diary = $('.nav-link=Diary');
      diary.click();
      const createDayReport = $('.btn=Create day report');
      createDayReport.click();
      browser.pause(1000);
      logout();
  });


  // it('s', () => {
  //
  // });


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
