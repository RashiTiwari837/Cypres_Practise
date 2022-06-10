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
        cy.get('.products').as('pdct')
        cy.get('@pdct').find('.product').should('have.length',4)
      cy.get('@pdct').find('.product').eq(2).contains('ADD TO CART').click();
    })
    it('add to cart',function(){
      cy
      .get('.products').find('.product').each(($el,index,$list) => {
        const txt = $el.find('h4.product-name').text()
        if(txt.includes('Carrot'))
        {
            $el.wrap().find('button').click()
        }
      })
      cy.get('.brand').should('have.have.text','GREENKART')
      cy.get('.brand').then(function(logotxt){
       cy.log(logotxt.text())
      })
    
    })

    it('verify cart' ,function(){
      cy.get('.cart-icon > img').click()
     // cy.get('.cart-items').find('.product-name').should('have.have.text','Carrot','Capsicum')
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()

    })


})