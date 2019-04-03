import Page from './page';
import MenuItem from '../pageComponents/menuItem';

class Menu extends Page {

  constructor() {
    super('Menu Page');
    this._containerLocator = '.nav';
    this.dashboard = new MenuItem(`${this._containerLocator} a[href$="dashboard"]`);
    this.icons = new MenuItem(`${this._containerLocator} a[href$="icons"]`);
    this.maps = new MenuItem(`${this._containerLocator} a[href$="maps"]`);
    this.notifications = new MenuItem(`${this._containerLocator} a[href$="notifications"]`);
    this.userProfile = new MenuItem(`${this._containerLocator} a[href$="user-profile"]`);
    this.tableList = new MenuItem(`${this._containerLocator} a[href$="table-list"]`);
    this.typography = new MenuItem(`${this._containerLocator} a[href$="typography"]`);
  }

  async selectMenuItem(item) {
    await this.click(item);
  }
}

module.exports = new Menu();