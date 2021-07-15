//Handling Frames
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

//npm install -D cypress-iframe      

//node_modules/.bin/cypress open


describe('My Fourth Test Suite',function(){
    it('My FourthTest case',function(){
        cy.visit(Cypress.env('url') + "/AutomationPractice/");


        //First load frame
        cy.frameLoaded(cy.xpath('//iframe[@id="courses-iframe"]'))

        //By iframe() trigger the frame
        //cy.iframe().find("a[href*='mentorship']").eq(0).click()

        //with xpath

        cy.iframe().xpath('(//a[@href="#/mentorship"])').eq(0).click()

        cy.iframe().find('h1[class*="pricing-title"]').should('have.length','2')
    })
})