
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />


describe('My First Test Suite', function(){
    it('My FristTest case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.xpath('//input[@class="search-keyword"]').type('ca')

        //selenium get hit url in browser, cypress get acts like findElement of selenium
        //cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4) //retrieve only visible elements

        cy.wait(2000)
        //as() method used for locators which is used multiple time
        //cy.xpath('//div[@class="product"]').as('productLocator')
        cy.get('.products').as('productLocator')
        //cy.xpath('//div[@class="product"]').should('have.length',4)
        cy.get('@productLocator').find('.product').should('have.length',4) //parent to child navigation

        //cy.xpath('(//div[@class="product"])[2]').contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log('Handling Promise');
        })

        cy.xpath('//div[@class="product"]').each(($el, index, $list) => {
        //cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            //const textVeg = $el.cy.xpath('//h4[@class="product-name"]').text()
            const textVeg = $el.find('h4.product-name').text() //get text
            if(textVeg.includes('Cashews')){
                cy.wrap($el.find('button')).click()

            }
        })

        //Handling Promise by then() method

        //assert if logo text is correctly displayeed
        cy.get('.brand').should('have.text','GREENKART')

        //this to print in logs and assert
        cy.xpath('//div[@class="brand greenLogo"]').then(function(logoelement){
        //cy.get('.brand').then(function(logoelement){    
            cy.log(logoelement.text()).should('have.text','GREENKART') //Assertion
        })
        //cy.log(logo.text());
        

    })
})