//Handling Web Control UI using Cypress
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />

//Assertion should() => have is property and be is behaviour
describe('My Third Test Suite',function(){
    it('My ThirdTest case',function(){
        cy.visit(Cypress.env('url') + "/AutomationPractice/");
        //check boxes with Cypress
        //for using more assertion in one line you can use and() method
        //check the value of check box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        //uncheck the box
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //first check and uncheck 1st then will check 2nd and 3rd
        cy.xpath('//label/input[@type="checkbox"]').check(['option2','option3']) //value of check boxes


        //Static Dropdown
        cy.xpath('//select').select('option2').should('have.value','option2') //select value attribute

        //Dynamic Dropdown
        cy.xpath('//input[@id="autocomplete"]').type('tu')

        cy.xpath('//li[@class="ui-menu-item"]/div').each(($e1, index, $list) => {

            if($e1.text() === "Turkmenistan"){
                cy.wrap($e1).click()
            }
        })

        //cy
        cy.xpath('//input[@id="autocomplete"]').should('have.value','Turkmenistan');

        //visible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        //invisible
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //radio button
        cy.xpath('//input[@value="radio1"]').check().should('be.checked')


    })
})