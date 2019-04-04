const User = require('../testSupport/builders/user');
const moment = require("moment");

describe('UI Dashboard Test Suite', () => {

    it('Should store inputted user values', function(){
        const timestamp = moment(new Date).format('DD-MM-YY.hh:mm:ss');
        let testUser = new User.Builder()
            .withCompanyName('Thomas Cook')
            .withUsername('test-04-04-2019')
            .withEmail('test@test.test')
            .withFirstName('FName1')
            .withLastName('LName1')
            .withAddress('Amosova 12')
            .withCity('Kyiv')
            .withCountry('Ukraine')
            .withPostCode('03056')
            .withAboutMe('Lorem ipsum dolor sit amet')
            .build();
    });

});