import Page from './page';
import EditProfileComponent from '../pageComponents/editProfileComponent';
import ProfileSummary from '../pageComponents/profileSummary';
import Header from '../pageComponents/header';

class EditProfile extends Page {
  constructor() {
    super('Edit Profile Page');
    this._containerLocator = '.main-panel';
    this.editProfile = new EditProfileComponent(this._containerLocator);
    this.profileSummary = new ProfileSummary(this._containerLocator);
    this.header = new Header(this._containerLocator);
  }
}

module.exports = new EditProfile();