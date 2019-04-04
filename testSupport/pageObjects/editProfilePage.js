const EditProfileComponent = require('../pageComponents/editProfileComponent')
const ProfileSummary = require('../pageComponents/profileSummary')
const Header = require('../pageComponents/header')

class EditProfile {
  constructor () {
    this._containerLocator = '.main-panel'
    this.editProfile = new EditProfileComponent(this._containerLocator)
    this.profileSummary = new ProfileSummary(this._containerLocator)
    this.header = new Header(this._containerLocator)
  }
}

module.exports = EditProfile
