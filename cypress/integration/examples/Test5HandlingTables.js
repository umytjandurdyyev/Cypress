//Handling Web Tables and Mouse hover
/// <reference types = "Cypress" /> 
/// <reference types="cypress-xpath" />


describe('My Fifth Test Suite',function(){
    it('My FifththTest case',function(){
        cy.visit(Cypress.env('url') + "/AutomationPractice/");

        //Table
        cy.xpath('(//table[@name="courses"]/tbody/tr/td[2])').each(($el, index, $list)=>{

        const text = $el.text();

        if(text.includes("Python")){
            
            //This line with next() method to get next sibling
            cy.xpath('(//table[@name="courses"]/tbody/tr/td[2])').eq(index).next().then(function(price){
            
            //This line without next() method, it gets first index then finds next sibling
            //cy.xpath('(//table[@name="courses"]/tbody/tr/td[3])['+ index +']').then(function(price){    
                expect(price.text()).to.equal('25');
            })

        }

        })

        //Mouse hover
    })
})