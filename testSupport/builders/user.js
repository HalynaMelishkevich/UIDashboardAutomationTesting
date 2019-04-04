class User {

    constructor(build) {
        this.companyName = build.companyName;
        this.username = build.username;
        this.email = build.email;
        this.firstName = build.firstName;
        this.lastName = build.lastName;
        this.address = build.address;
        this.city = build.city;
        this.country = build.country;
        this.postCode = build.postCode;
        this.abountMe = build.aboutMe;
    }

    static get Builder() {
        class Builder {
            withCompanyName(companyName) {
                this.companyName = companyName;
                return this;
            }
            withUsername(username) {
                this.username = username;
                return this;
            }
            withEmail(email) {
                this.email = email;
                return this;
            }
            withFirstName(firstName) {
                this.firstName = firstName;
                return this;
            }
            withLastName(lastName) {
                this.lastName = lastName;
                return this;
            }
            withAddress(address) {
                this.address = address;
                return this;
            }
            withCity(city) {
                this.city = city;
                return this;
            }
            withCountry(country) {
                this.country = country;
                return this;
            }
            withPostCode(postCode) {
                this.postCode = postCode;
                return this;
            }
            withAboutMe(aboutMe) {
                this.aboutMe = aboutMe;
                return this;
            }
            build() {
                return new User(this);
            }
        }
        return Builder;
    }
}

module.exports = User;