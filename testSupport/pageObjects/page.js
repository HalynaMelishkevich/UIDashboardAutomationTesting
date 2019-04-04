const protractor = require('protractor');

const EC = protractor.ExpectedConditions;
const timeout = 15000;

class Page {

  constructor(title) {
    this.title = title;
  }

  async open(path) {
    await browser.get(path);
  }

  async click(element) {
    await browser.driver.manage().timeouts().setScriptTimeout(timeout);
    await browser.wait(EC.visibilityOf(element));
    await element.click();
  }

  async clear(element) {
    await browser.driver.manage().timeouts().setScriptTimeout(timeout);
    await browser.wait(EC.visibilityOf(element));
    await element.clear();
  }

  async input(data) {
    await browser.driver.manage().timeouts().setScriptTimeout(timeout);
    await browser.wait(EC.visibilityOf(this));
    await this.sendKeys(data);
  }

}

module.exports = Page;