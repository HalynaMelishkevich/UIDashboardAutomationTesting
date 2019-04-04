const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

module.exports = {

  async open(path) {
    await browser.get(path);
  },

  async click(element) {
    await browser.wait(EC.visibilityOf(element));
    await element.click();
  },

  async clear(element) {
    await browser.wait(EC.visibilityOf(element));
    await element.clear();
  },

  async input(data) {
    await browser.wait(EC.visibilityOf(this));
    await this.sendKeys(data);
  }

};