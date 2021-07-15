/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import'cypress-xpath'

class ProductPage{

    getProductTitle(){
        return cy.xpath('//h4[@class="card-title"]');
    }

    getAdd(){
        return cy.xpath('(//*[@class="btn btn-info"])');
    }

    getCheckOutBlue(){
        return cy.xpath('//*[@class="nav-link btn btn-primary"]');
    }

    getCheckOutGreen(){
        return cy.xpath('//*[contains(text(),"Checkout")]');
    }

    getCountry(){
        return cy.xpath('//*[@id="country"]');
    }

    getTermConditions(){
        return cy.xpath('//*[contains(text(),"I agree")]');
    }

    getPurchase(){
        return cy.xpath('//*[@value="Purchase"]')
    }

    getSuccessMessage(){
        return cy.xpath('//*[@class="alert alert-success alert-dismissible"]')
        //return cy.get('.alert');
    }

    getTotalPriceEachProduct(){
        return cy.xpath('//td[4]/strong');
        //return cy.get('tr td:nth-child(4) strong');

    }
    getActualTotalPrice(){
        return cy.xpath('//h3/strong');
    }

    getSelectedCountry(){
        return cy.xpath('//div[@class="suggestions"]');
    }
}

export default ProductPage;