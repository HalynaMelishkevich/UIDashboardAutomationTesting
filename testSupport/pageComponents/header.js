class Header {
  constructor (parentLocator) {
    this._containerLocator = `${parentLocator} .navbar`
    this.search = element(by.css(`${this._containerLocator} input`))
    this.dashboardLink = element(by.css(`${this._containerLocator} .media-2_sound-wave`))
    this.dropdown = element(by.css(`${this._containerLocator} .dropdown-toggle`))
    this.profileLink = element(by.css(`${this._containerLocator} .users_single-02`))
  }
}

module.exports = Header
