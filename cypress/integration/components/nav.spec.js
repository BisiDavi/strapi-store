/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
        cy.visit('https://www.jenjensluxury.com/')
        cy.get('[data-cy=nav]').contains('logo')
        cy.get('[data-cy=logo]').click()
        cy.location('pathname').should('equal','https://www.jenjensluxury.com')
      })

      it('check the hamburger menu displays menu',() => {
          cy.get('[data-cy=hamburger]').click()
          cy.get('[data-cy=menu]').contains('Signature Style Wigs').click()
          cy.location('pathname').should('include', '/collection/signature-style-wigs')
      })

      it('check for submenu', () => {
          cy.get('[data-cy=submenu]').contains('Privacy Policy').click()
          cy.location('pathname').should('include', '/policy/privacy-policy')
      })
})