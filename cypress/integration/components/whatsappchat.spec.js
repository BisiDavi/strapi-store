/// <reference types="cypress" />

context('Whatsapp chat widget', () => {
    beforeEach(() => {
        cy.visit('https://www.jenjensluxury.com/')
    })

    it('page should display whatsapp widget',() => {
        cy.get('[data-cy=whatsapp-widget]').should('be.visible')
    })
})