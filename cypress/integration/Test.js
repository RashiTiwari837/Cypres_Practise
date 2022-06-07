/// <reference types="Cypress" />

describe('my first script',function(){

    it('open website',function () {
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        })
    it('Enter test', function(){
        cy.get(".search-keyword").type('ca');
        // using jquery :visible
         cy.get('.product:visible').should('have.length',4)
        //Parent chaining
        cy.get('.products').find('.product').should('have.length',4)
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      
       
    })


})