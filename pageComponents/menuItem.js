class MenuItem {
  constructor(locator) {
    this.title = locator;
    this.icon = `${locator} i`;
  }
}

module.exports = MenuItem;