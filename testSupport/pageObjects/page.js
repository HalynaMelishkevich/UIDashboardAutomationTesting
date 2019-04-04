class Page {

  constructor(title) {
    this.title = title;
  }

  async open(path) {
    await browser.get(path);
  }

  async waitToBeVisible(locator) {
    const ec = protractor.ExpectedConditions;
    await browser.wait(until.presenceOf(element(by.css(locator))));
  }

  async click(locator) {
    await this.waitToBeVisible(locator)
    await element(by.css(locator)).click();
  }
}

module.exports = Page;