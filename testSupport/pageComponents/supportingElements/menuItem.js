class MenuItem {
  constructor (locator) {
    this.title = element(by.css(`${locator} p`))
    this.icon = element(by.css(`${locator} i`))
  }
}

module.exports = MenuItem
