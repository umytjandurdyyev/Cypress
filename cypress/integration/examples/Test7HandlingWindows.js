//Handling Windows
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />                


describe('My Fourth Test Suite',function(){
    it('My FourthTest case',function(){
        cy.visit(Cypress.env('url') + "/AutomationPractice/");

        cy.xpath('//a[@id="opentab"]').then(function(el){

        //prop() is JQuery method
            const url = el.prop('href');
            cy.visit(el.prop('href'))
            cy.log(url);
        })
    })
})