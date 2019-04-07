class Footer {
  constructor (parentLocator) {
    this._containerLocator = `${parentLocator} .footer`
    this.teamLink = element(by.css(`${this._containerLocator} li:nth-of-type(1)`))
    this.aboutUsLink = element(by.css(`${this._containerLocator} li:nth-of-type(2)`))
    this.blogLink = element(by.css(`${this._containerLocator} li:nth-of-type(3)`))
    this.copyright = element(by.css(`${this._containerLocator} .copyright`))
  }
}

module.exports = Footer
