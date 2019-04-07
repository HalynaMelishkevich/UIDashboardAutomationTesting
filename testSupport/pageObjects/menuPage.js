const MenuItem = require('../pageComponents/supportingElements/menuItem')

class Menu {
  constructor () {
    this._containerLocator = '.sidebar'
    this.logo = element(by.css(`${this._containerLocator} .logo`))
    this.dashboard = new MenuItem(`${this._containerLocator} a[href$="dashboard"]`)
    this.icons = new MenuItem(`${this._containerLocator} a[href$="icons"]`)
    this.maps = new MenuItem(`${this._containerLocator} a[href$="maps"]`)
    this.notifications = new MenuItem(`${this._containerLocator} a[href$="notifications"]`)
    this.userProfile = new MenuItem(`${this._containerLocator} a[href$="user-profile"]`)
    this.tableList = new MenuItem(`${this._containerLocator} a[href$="table-list"]`)
    this.typography = new MenuItem(`${this._containerLocator} a[href$="typography"]`)
    this.upgrade = new MenuItem(`${this._containerLocator} a[href$="upgrade"]`)
  }
}

module.exports = Menu
