/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import'cypress-xpath'

class HomePage{

    getEditBox(){
        return cy.xpath('(//input[@name="name"])[1]');
    }

    getTwoWayDataBinding(){
        return cy.xpath('(//input[@name="name"])[2]');
    }

    getGender(){
        return cy.xpath('//select[@id="exampleFormControlSelect1"]');
    }

    getEntrepreneur(){
        return cy.xpath('(//input[@id="inlineRadio3"])');
    }

    getShopTab(){
        return cy.xpath('(//a[.="Shop"])');
    }

    getEmail(){
        return cy.xpath('(//input[@name="email"])[1]');
    }
}

export default HomePage; //export keyword JS will make sure to make this class available to all other files in your framework