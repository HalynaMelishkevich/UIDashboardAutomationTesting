import * as cssToXPath from 'css-to-xpath';

class InputField {

    constructor(parentLocator, placeholder, correctHolder = null) {
        const parentLocatorXpath = cssToXPath(parentLocator);

        //workaround for incorrect placeholder of First Name element
        if (correctHolder) {
            placeholder = correctHolder;
        }

        if(placeholder !== 'Here can be your description') {
            this.label = element(by.xpath(`${parentLocatorXpath}//input[@placeholder='${placeholder}']/preceding-sibling::label`));
            this.input = element(by.xpath(`${parentLocatorXpath}//input[@placeholder='${placeholder}']`));
        } else {
            this.label = element(by.xpath(`${parentLocatorXpath}//textarea[@placeholder='${placeholder}']/preceding-sibling::label`));
            this.textArea = element(by.xpath(`${parentLocatorXpath}//textarea[@placeholder='${placeholder}']`));
        }
    }
}

module.exports = InputField;