/// <reference types="cypress" />

context('alertBanner', () => {
    beforeEach(() => {
        cy.visit('https://www.jenjensluxury.com/')
      })

      it('alert banner should container alert text', () => {
          cy.get('[data-cy=alertBanner]').contains('h3')
      })
      
})