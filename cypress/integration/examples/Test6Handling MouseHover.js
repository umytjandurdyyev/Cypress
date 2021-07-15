//Handling Web Tables and Mouse hover
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />


describe('My Sixth Test Suite',function(){
    it('My SixththTest case',function(){
        cy.visit(Cypress.env('url') + "/AutomationPractice/");

        //Mouse hover
        cy.xpath('//div[@class="mouse-hover-content"]').invoke('show') //JQuery function

        //without upper line you can able to click hidden elements by {force : true}
        cy.xpath('//a[.="Top"]').click()//{force:true})
        cy.url().should('include','top')
    })
})