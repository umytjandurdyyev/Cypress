/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import'cypress-xpath'
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';


describe('Before Test Suite', function(){
    //runs once before all tests in the block
    before(function(){
        // talk with fixtures folder
        // file name where you want access in
        // Data Driven Testing (DDT)
        cy.fixture('example').then(function(data){
            this.data = data;
        });
        
    });

    beforeEach(function(){
        cy.visit(Cypress.env('url') + "/angularpractice/");
        cy.fixture('example').then(function(data){
            this.data = data;
        });
        

    })

    it('Test Case', function(){
        const homePage = new HomePage;
        //cy.visit(this.data.url);
        homePage.getEditBox().type(this.data.name);

        // check attribute value
        homePage.getEditBox().should('have.attr','minlength',2);

        // check radio button disabled
        homePage.getEntrepreneur().should('be.disabled');

        homePage.getEmail().type(this.data.email);
        homePage.getGender().select((this.data.gender));

        // Two-way data binding
        homePage.getTwoWayDataBinding().should('have.value',this.data.name);

        

    })

    it('Shop', function(){
        //This explicitly wait for specific test not all test cases
        //cypress.json
        //Cypress.config('defaultCommandTimeout', 8000)

        const homePage = new HomePage;
        const productPage = new ProductPage;
        homePage.getShopTab().click().then(function(){
            this.data.productName.forEach((element) => {
                cy.selectProduct(element);
            })
        })
        const successMessage = 'Success! Thank you! Your order will be delivered in next few weeks :-)'
        let sum = 0;

        productPage.getCheckOutBlue().click();
        productPage.getTotalPriceEachProduct().each(($el, index, $list) => {
           
            const amount = $el.text().split(" ");
            let result = amount[1].trim();
            sum = Number(sum) + Number(result);
        }).then(function(){
            cy.log(sum);
        })
        productPage.getActualTotalPrice().then(function(element){
            const totalPrice = element.text().split(" ");
            let total = totalPrice[1].trim();
            expect(Number(total)).to.equal(sum);

        })
        productPage.getCheckOutGreen().click();
        productPage.getCountry().type('Germany');
        productPage.getSelectedCountry().click()//{force:true}) 
        productPage.getTermConditions().click();
        productPage.getPurchase().click();
        //productPage.getSuccessMessage().contains(successMessage);

        //Solve the Promise 
        productPage.getSuccessMessage().then(function(element){
            const actualText = element.text()

            actualText.trim()
            
            //Chai assertion
            expect(actualText.includes("Success")).to.be.true
            
        })

        
    })

    
})