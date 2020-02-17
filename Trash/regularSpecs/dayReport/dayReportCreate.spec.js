const { expect } = require('chai');
const { URL_LOGIN, diarySelectors } = require('./dayReport.data');
const {loginAsAdmin, logout} = require('../User/actions')


describe('CREATE DAY REPORT', () => {
    it('Login as admin', () => {
        loginAsAdmin();
        browser.pause(3000);
    });
    after('Browser Pause', () => {
        browser.pause(5000);
    });

  it('should redirect to Diary create page', () => {
      const diary = $(diarySelectors.diaryLink);
      diary.click();
      browser.pause(1000);
  });

  it('should click Create day report', () => {
      const createDayReport = $(diarySelectors.createDayReportButton);
      createDayReport.click();
  });

    it('should check "I need help" box', () => {
        const iNeedHelp = $(diarySelectors.iNeedHelp);
        iNeedHelp.click();
    });

    it('should check "I understood everything" box', () => {
        const iUnderstoodEverything = $(diarySelectors.iUnderstoodEverything);
        iUnderstoodEverything.click();
    });

    it('should check "Helped classmates" box', () => {
        const helpedClassmates = $(diarySelectors.helpedClassmates);
        helpedClassmates.click();
    });

    it('should check "Watched lectures" box', () => {
        const watchedLectures = $(diarySelectors.watchedLectures);
        watchedLectures.click();
    });


    it('should check "Read documentation" box', () => {
        const readDocumentation = $(diarySelectors.readDocumentation);
        readDocumentation.click();
    });

    it('should check "Code practice" box', () => {
        const codePractice = $(diarySelectors.codePractice);
        codePractice.click();
    });

    it('should check "Quiz practice" box', () => {
        const quizPractice = $(diarySelectors.quizPractice);
        quizPractice.click();
    });

    it('should check "Interview preparation" box', () => {
        const interviewPreparation = $(diarySelectors.interviewPreparation);
        interviewPreparation.click();
    });

    it('should check "Recruiter phone call" box', () => {
        const recruiterPhoneCall = $(diarySelectors.recruiterPhoneCall);
        recruiterPhoneCall.click();
    });

    it('should check "Interview technical screen" box', () => {
        const interviewTechnicalScreen = $(diarySelectors.interviewTechnicalScreen);
        interviewTechnicalScreen.click();
    });

    it('should check "Interview onsite" box', () => {
        const interviewOnsite = $(diarySelectors.interviewOnsite);
        interviewOnsite.click();
    });

    it('should check "Got a job offer" box', () => {
        const gotAJobOffer = $(diarySelectors.gotAJobOffer);
        gotAJobOffer.click();
    });

    it('should select "What is your morale" ant set it to 10', () => {
        const whatIsYourMorale = $(diarySelectors.whatIsYourMorale);
        whatIsYourMorale.selectByIndex(1);
    });

    it('should fill "How many hours did you study/practice today" field', () => {
        const setHoursYouStudy = $(diarySelectors.setHoursYouStudy);
        setHoursYouStudy.setValue("8");
    });

    it('should fill "How was your day?" field', () => {
        const howWasYourDay = $(diarySelectors.howWasYourDay);
        howWasYourDay.setValue(diarySelectors.yourDayDescription);
    });

    it('should click "Save" button', () => {
        const saveButton = $(diarySelectors.saveButton);
        saveButton.click();
    });

    it('should LogOut', () => {
        logout();
    });










  //       $('form select')
  //       $()
  //       $().setValue("");
  //       $().click();
  //       browser.pause(10000);
  //
  //   });



});
