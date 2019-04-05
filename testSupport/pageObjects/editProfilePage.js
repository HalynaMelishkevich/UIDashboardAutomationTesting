const EditProfileComponent = require('../pageComponents/editProfileComponent')
const ProfileSummary = require('../pageComponents/profileSummary')
const Header = require('../pageComponents/header')
const User = require('../builders/user')
const webdriverUtils = require('../webdriverUtils')

class EditProfile {
  constructor () {
    this._containerLocator = '.main-panel'
    this.editProfile = new EditProfileComponent(this._containerLocator)
    this.profileSummary = new ProfileSummary(this._containerLocator)
    this.header = new Header(this._containerLocator)
  }

  async setUserData (user) {
    const convertedUser = new User(user)
    const userElementMap = new Map()
    userElementMap.set(this.editProfile.company.input, convertedUser.companyName)
    userElementMap.set(this.editProfile.username.input, convertedUser.username)
    userElementMap.set(this.editProfile.emailAddress.input, convertedUser.email)
    userElementMap.set(this.editProfile.firstName.input, convertedUser.firstName)
    userElementMap.set(this.editProfile.lastName.input, convertedUser.lastName)
    userElementMap.set(this.editProfile.address.input, convertedUser.address)
    userElementMap.set(this.editProfile.city.input, convertedUser.city)
    userElementMap.set(this.editProfile.country.input, convertedUser.country)
    userElementMap.set(this.editProfile.postalCode.input, convertedUser.postCode)
    userElementMap.set(this.editProfile.aboutMe.input, convertedUser.aboutMe)
    for (let [key, value] of userElementMap) {
      if (key && value) {
        await webdriverUtils.input(key, value)
      }
    }
  }

  async getUserData () {
    let user = {}
    user.username = await webdriverUtils.getInputText(this.editProfile.username.input)
    user.email = await webdriverUtils.getInputText(this.editProfile.emailAddress.input)
    user.firstName = await webdriverUtils.getInputText(this.editProfile.firstName.input)
    user.lastName = await webdriverUtils.getInputText(this.editProfile.lastName.input)
    user.address = await webdriverUtils.getInputText(this.editProfile.address.input)
    user.city = await webdriverUtils.getInputText(this.editProfile.city.input)
    user.country = await webdriverUtils.getInputText(this.editProfile.country.input)
    user.postCode = await webdriverUtils.getInputText(this.editProfile.postalCode.input)
    user.aboutMe = await webdriverUtils.getInputText(this.editProfile.aboutMe.input)
    return user
  }
}

module.exports = EditProfile
