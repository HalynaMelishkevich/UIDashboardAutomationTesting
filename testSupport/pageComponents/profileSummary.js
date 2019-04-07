class ProfileSummary {
  constructor (parentLocator) {
    this._containerLocator = `${parentLocator} .card-user`
    this.backgroundImage = element(by.css(`${this._containerLocator} .image`))
    this.avatar = element(by.css(`${this._containerLocator} .avatar`))
    this.fullName = element(by.css(`${this._containerLocator} .title`))
    this.username = element(by.css(`${this._containerLocator} .description:not(.text-center)`))
    this.aboutMe = element(by.css(`${this._containerLocator} .description.text-center`))
    this.facebookLink = element(by.css(`${this._containerLocator} .fa-facebook-f`))
    this.twitterLink = element(by.css(`${this._containerLocator} .fa-twitter`))
    this.googleLink = element(by.css(`${this._containerLocator} .fa-google-plus-g`))
  }
}

module.exports = ProfileSummary
