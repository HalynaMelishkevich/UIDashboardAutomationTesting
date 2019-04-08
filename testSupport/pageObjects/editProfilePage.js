const EditProfileComponent = require('../pageComponents/editProfileComponent')
const ProfileSummary = require('../pageComponents/profileSummary')
const Header = require('../pageComponents/header')
const Footer = require('../pageComponents/footer')
const User = require('../builders/user')
const webdriverUtils = require('../webdriverUtils')
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'info'

class EditProfile {
  constructor () {
    this._containerLocator = '.main-panel'
    this.editProfile = new EditProfileComponent(this._containerLocator)
    this.profileSummary = new ProfileSummary(this._containerLocator)
    this.header = new Header(this._containerLocator)
    this.footer = new Footer(this._containerLocator)
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
    logger.info('User data were successfully set.')
  }

  async getUserData () {
    return {
      username: await webdriverUtils.getInputText(this.editProfile.username.input),
      email: await webdriverUtils.getInputText(this.editProfile.emailAddress.input),
      firstName: await webdriverUtils.getInputText(this.editProfile.firstName.input),
      lastName: await webdriverUtils.getInputText(this.editProfile.lastName.input),
      address: await webdriverUtils.getInputText(this.editProfile.address.input),
      city: await webdriverUtils.getInputText(this.editProfile.city.input),
      country: await webdriverUtils.getInputText(this.editProfile.country.input),
      postCode: await webdriverUtils.getInputText(this.editProfile.postalCode.input),
      aboutMe: await webdriverUtils.getInputText(this.editProfile.aboutMe.input)
    }
  }
}

module.exports = EditProfile
