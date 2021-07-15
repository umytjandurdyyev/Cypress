
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />

describe('My Second Test Suite', function(){
    it('My SecondTest case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.xpath('//input[@class="search-keyword"]').type('ca')

        //selenium get hit url in browser, cypress get acts like findElement of selenium
        //cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //should() is chai assertion
        cy.get('.product:visible').should('have.length',4) //retrieve only visible elements

        cy.wait(2000)
        //as() method used for locators which is used multiple time
        //cy.xpath('//div[@class="product"]').as('productLocator')
        cy.get('.products').as('productLocator')

        cy.xpath('//div[@class="product"]').each(($el, index, $list) => {
        //cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text() //get text
            if(textVeg.includes('Cashews')){
                cy.wrap($el.find('button')).click()

            }
        })

        cy.xpath('//a[@class="cart-icon"]/img').click()
        cy.xpath('//button[.="PROCEED TO CHECKOUT"]').click()
        cy.xpath('//button[.="Place Order"]').click()

        
        

    })
})