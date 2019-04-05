const moment = require('moment')
const assert = require('chai').assert
const Menu = require('../testSupport/pageObjects/menuPage')
const EditProfile = require('../testSupport/pageObjects/editProfilePage')
const User = require('../testSupport/builders/user')
const webdriverUtils = require('../testSupport/webdriverUtils')

describe('UI Dashboard Test Suite', () => {
  it('Should store inputted user values', async () => {
    const timestamp = moment(new Date()).format('DD-MM-YY.hh:mm:ss')

    let testUser = new User.Builder()
      .withUsername(`test${timestamp}`)
      .withEmail('test@test.test')
      .withFirstName('FName')
      .withLastName('LName')
      .withAddress('Address')
      .withCity('City')
      .withCountry('Country')
      .withPostCode('11111')
      .withAboutMe('Lorem ipsum dolor sit amet')
      .build()

    const menu = new Menu()
    await webdriverUtils.open('https://demos.creative-tim.com/now-ui-dashboard-angular/')
    await webdriverUtils.click(menu.userProfile.title)
    const editProfile = new EditProfile()
    await editProfile.setUserData(testUser)
    const pageUserData = await editProfile.getUserData()

    for (let key in testUser) {
      assert.deepEqual(testUser[key], pageUserData[key], 'Inputted values are incorrectly stored')
    }
  })
})
