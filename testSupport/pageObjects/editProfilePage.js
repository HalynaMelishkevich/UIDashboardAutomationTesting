const Page = require('./page');
const EditProfileComponent = require('../pageComponents/editProfileComponent');
const ProfileSummary = require('../pageComponents/profileSummary');
const Header = require('../pageComponents/header');

class EditProfile extends Page {
  constructor() {
    super('Edit Profile Page');
    this._containerLocator = '.main-panel';
    this.editProfile = new EditProfileComponent(this._containerLocator);
    this.profileSummary = new ProfileSummary(this._containerLocator);
    this.header = new Header(this._containerLocator);
  }
}

module.exports = EditProfile;