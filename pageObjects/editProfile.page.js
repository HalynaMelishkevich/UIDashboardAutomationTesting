import Page from './page';
import MenuItem from "../pageComponents/menuItem";

class EditProfile extends Page {
  constructor() {
    super('Edit Profile Page');
    this._containerLocator = '.nav';
    this.dashboard = new MenuItem(`${this._containerLocator} a[href$="dashboard"]`);
  }
}

module.exports = new EditProfile();