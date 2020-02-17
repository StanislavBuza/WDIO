const HOST = 'https://stage.pasv.us';

const URL_LOGIN = `${HOST}/user/login`;

const diarySelectors = {
  diaryLink: '.nav-link=Diary',
  createDayReportButton : '.btn=Create day report',
    iNeedHelp : 'form input[label="I need help"]',
    iUnderstoodEverything : 'form input[label="I understood everything"]',
    helpedClassmates : 'form input[label="Helped classmates"]',
    watchedLectures : 'form input[label="Watched lectures"]',
    readDocumentation : 'form input[label="Read documentation"]',
    codePractice : 'form input[label="Code practice"]',
    quizPractice : 'form input[label="Quiz practice"]',
    interviewPreparation : 'form input[label="Interview preparation"]',
    recruiterPhoneCall : 'form input[label="Recruiter phone call"]',
    interviewTechnicalScreen : 'form input[label="Interview technical screen"]',
    interviewOnsite : 'form input[label="Interview onsite"]',
    gotAJobOffer : 'form input[label="Got a job offer"]',
    whatIsYourMorale : 'form select',
    setHoursYouStudy : 'form input[name="hours"]',
    howWasYourDay : 'form textarea[name="description"]',
    yourDayDescription : 'Today I worked very hard, like really hard',
    saveButton: 'form button[type="submit"]'

};

module.exports = {URL_LOGIN, diarySelectors }