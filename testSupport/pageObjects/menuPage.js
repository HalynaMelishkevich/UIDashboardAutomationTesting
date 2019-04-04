const MenuItem = require('../pageComponents/supportingElements/menuItem');

class Menu {

  constructor() {
    this._containerLocator = '.nav';
    this.dashboard = new MenuItem(`${this._containerLocator} a[href$="dashboard"]`);
    this.icons = new MenuItem(`${this._containerLocator} a[href$="icons"]`);
    this.maps = new MenuItem(`${this._containerLocator} a[href$="maps"]`);
    this.notifications = new MenuItem(`${this._containerLocator} a[href$="notifications"]`);
    this.userProfile = new MenuItem(`${this._containerLocator} a[href$="user-profile"]`);
    this.tableList = new MenuItem(`${this._containerLocator} a[href$="table-list"]`);
    this.typography = new MenuItem(`${this._containerLocator} a[href$="typography"]`);
  }

}

module.exports = Menu;