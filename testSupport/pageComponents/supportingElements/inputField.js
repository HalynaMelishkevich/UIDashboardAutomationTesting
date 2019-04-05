const cssToXPath = require('css-to-xpath')

class InputField {
  constructor (parentLocator, placeholder, correctHolder = null) {
    const parentLocatorXpath = cssToXPath(parentLocator)

    // workaround for incorrect placeholder of First Name element
    if (correctHolder) {
      this.label = element(by.xpath(`(${parentLocatorXpath}//input[@placeholder='${placeholder}'])[2]/preceding-sibling::label`))
      this.input = element(by.xpath(`(${parentLocatorXpath}//input[@placeholder='${placeholder}'])[2]`))
    } else {
      const choice = (placeholder !== 'Here can be your description') ? 'input' : 'textarea'
      this.label = element(by.xpath(`${parentLocatorXpath}//${choice}[@placeholder='${placeholder}']/preceding-sibling::label`))
      this.input = element(by.xpath(`${parentLocatorXpath}//${choice}[@placeholder='${placeholder}']`))
    }
  }
}

module.exports = InputField
