//Handling Alerts, popups, Child Windows
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />


describe('My Fourth Test Suite',function(){
    it('My FourthTest case',function(){
        cy.visit(Cypress.env('url') + "/AutomationPractice/");

        cy.xpath('//input[@id="alertbtn"]').click()
        cy.xpath('//input[@id="confirmbtn"]').click()

        //Cypress events

        //window:alert
        cy.on('window:alert',(str)=>{

            //Mocha framework
            //Check and validate alert text using cypress
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        //window:confirm
        cy.on('window:confirm',(str)=>{

            //Mocha framework
            //Check and validate alert text using cypress
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

        //Target Attribute
        //Child Window
        //You can handle child window by removing target attribute by using JQuery method removeAttr()
        cy.xpath('//a[@id="opentab"]').invoke('removeAttr','target').click()

        //Navigation back or forward
        cy.wait(2000)
        cy.go('back')

        //get URL by url() method
        cy.url().should('include','https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.wait(2000)
        cy.go('forward')
        cy.url().should('include','https://www.rahulshettyacademy.com/#/index')

        //Open New Window
        cy.xpath('')
    })
})