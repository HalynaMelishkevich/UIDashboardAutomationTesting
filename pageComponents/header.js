class Header {
    constructor(parentLocator) {
        this._containerLocator = `${parentLocator} .navbar`;
    }
}

module.exports = Header;