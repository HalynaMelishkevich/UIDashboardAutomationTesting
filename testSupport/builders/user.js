class User {
  constructor (build) {
    build.companyName ? this.companyName = build.companyName : null
    build.username ? this.username = build.username : null
    build.email ? this.email = build.email : null
    build.firstName ? this.firstName = build.firstName : null
    build.lastName ? this.lastName = build.lastName : null
    build.address ? this.address = build.address : null
    build.city ? this.city = build.city : null
    build.country ? this.country = build.country : null
    build.postCode ? this.postCode = build.postCode : null
    build.aboutMe ? this.aboutMe = build.aboutMe : null
  }

  static get Builder () {
    class Builder {
      withCompanyName (companyName) {
        this.companyName = companyName
        return this
      }
      withUsername (username) {
        this.username = username
        return this
      }
      withEmail (email) {
        this.email = email
        return this
      }
      withFirstName (firstName) {
        this.firstName = firstName
        return this
      }
      withLastName (lastName) {
        this.lastName = lastName
        return this
      }
      withAddress (address) {
        this.address = address
        return this
      }
      withCity (city) {
        this.city = city
        return this
      }
      withCountry (country) {
        this.country = country
        return this
      }
      withPostCode (postCode) {
        this.postCode = postCode
        return this
      }
      withAboutMe (aboutMe) {
        this.aboutMe = aboutMe
        return this
      }
      build () {
        return new User(this)
      }
    }
    return Builder
  }
}

module.exports = User
