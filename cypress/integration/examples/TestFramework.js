/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import'cypress-xpath'
import HomePage from '../../support/pageObjects/HomePage'


describe('Before Test Suite', function(){
    //runs once before all tests in the block
    before(function(){
        // talk with fixtures folder
        // file name where you want access in
        // Data Driven Testing (DDT)
        cy.fixture('example').then(function(data){
            this.data = data;
        });
        //cy.visit('https://www.rahulshettyacademy.com/angularpractice/');


    });

    beforeEach(function(){
        cy.visit(Cypress.env('url') + "/angularpractice/");
        cy.fixture('example').then(function(data){
            this.data = data;
        });
        const homePage = new HomePage;

    })

    it('Test Case', function(){
        //cy.visit(this.data.url);
        cy.xpath('(//input[@name="name"])[1]').type(this.data.name);

        // check attribute value
        cy.xpath('(//input[@name="name"])[1]').should('have.attr','minlength',2);

        // check radio button disabled
        cy.xpath('(//input[@id="inlineRadio3"])').should('be.disabled');

        //cy.pause()
        //cy.debug()

        cy.xpath('(//input[@name="email"])[1]').type(this.data.email)
        cy.xpath('//select[@id="exampleFormControlSelect1"]').select((this.data.gender));

        // Two-way data binding
        cy.xpath('(//input[@name="name"])[2]').should('have.value',this.data.name);

        // cy.xpath('(//a[.="Shop"])').click();
        

        // this.data.productName.forEach((element) => {
        //     cy.selectProduct(element)
        // })

    })

    it('Shop', function(){
        cy.xpath('(//a[.="Shop"])').click();
        // cy.xpath('//h4[@class="card-title"]').each(($el, index, $list)  =>{
        //     if($el.text().includes('Blackberry')){
        //         //cy.xpath('(//*[@class="btn btn-info"])['+(index+1)+']').click()
        //         cy.xpath('(//*[@class="btn btn-info"])').eq(index).click()
        //     }
        // })
       
        // cy.selectProduct('Blackberry') // ready command created for avoid hard coding and for clean code
        //                                 // cypress/support/commands
        // cy.selectProduct('Nokia Edge')

        //cy.pause()


        cy.wait(2000).then(function(){
            this.data.productName.forEach((element) => {
                cy.selectProduct(element)
            })
        })
        
    })

    
})