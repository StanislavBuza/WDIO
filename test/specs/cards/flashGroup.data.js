const flashGroup = {
  name: 'My Group Name123...StanB',
  description: 'My Group description123.........StanB'
};

const flashGroupSelectors = {
    cardsSelector: '//div[@id="site-menu"]//a[@qa="cards-link"]',
    createNewFlashGroup: '//button[@qa="flash-create-new-group"]',
    modalForm :'//div[contains(@class, "sidepanel")]',
    modalFromTitle : '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',
    modalFormGroupName: '//div[contains(@class, "sidepanel")]//input[@name="name"]',
    modalFormGroupDescription: '//div[contains(@class, "sidepanel")]//input[@name="description"]',
    submitForm: '//div[contains(@class, "sidepanel")]//button[@type="submit"]',
    firstFlashGroup: '//div[@qa="flash-group-list "]//h4/a',
    clickFirstTitle: '//div[@qa="flash-group-list "]//h4/a',
    flashGroupH1: '//h1'
};

module.exports = {flashGroupSelectors, flashGroup};