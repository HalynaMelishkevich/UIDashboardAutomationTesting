class MenuItem {
  constructor (locator) {
    this.title = element(by.css(locator))
    this.icon = element(by.css(`${locator} i`))
  }
}

module.exports = MenuItem
