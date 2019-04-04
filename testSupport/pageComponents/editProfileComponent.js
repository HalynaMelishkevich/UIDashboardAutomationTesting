const InputField = require('./supportingElements/inputField')

class EditProfileComponent {
  constructor (parentLocator) {
    this._containerLocator = `${parentLocator} .card:not(.card-user)`
    this.title = element(by.css(`${this._containerLocator} .title`))
    this.company = new InputField(this._containerLocator, 'Company')
    this.username = new InputField(this._containerLocator, 'Username')
    this.emailAddress = new InputField(this._containerLocator, 'Email')
    this.firstName = new InputField(this._containerLocator, 'Company', 'First Name')
    this.lastName = new InputField(this._containerLocator, 'Last Name')
    this.address = new InputField(this._containerLocator, 'Home Address')
    this.city = new InputField(this._containerLocator, 'City')
    this.country = new InputField(this._containerLocator, 'Country')
    this.postalCode = new InputField(this._containerLocator, 'ZIP Code')
    this.aboutMe = new InputField(this._containerLocator, 'Here can be your description')
  }
}

module.exports = EditProfileComponent
