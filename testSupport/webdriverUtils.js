const protractor = require('protractor')
const EC = protractor.ExpectedConditions
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'info'

module.exports = {

  async open (path) {
    await browser.get(path)
    logger.info(`Page was opened: ${path}`)
  },

  async click (element) {
    await browser.wait(EC.visibilityOf(element))
    await element.click()
  },

  async clear (element) {
    await browser.wait(EC.visibilityOf(element))
    await element.clear()
  },

  async input (element, data) {
    await browser.wait(EC.visibilityOf(element))
    await element.clear()
    await element.sendKeys(data)
  },

  async getInputText (element) {
    await browser.wait(EC.visibilityOf(element))
    const text = await element.getAttribute('value')
    return text
  }

}
