/// <reference types="cypress" />

context('promoBanner component', () => {
    beforeEach(() => {
        cy.visit('https://www.jenjensluxury.com/')
      })

      it('promo banner should contains promo text', () => {
          cy.get('[data-cy=promoBanner]').contains('h4')
      })
      
})