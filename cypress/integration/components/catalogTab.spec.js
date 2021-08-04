/// <reference types="cypress" />

context('CatalogTab',() => {
    beforeEach(() => {
        cy.visit('https://www.jenjensluxury.com/')
    })

    it('validate the catalog home link', () => {
        cy.get('[data-cy=Home]').click()
        cy.location('pathname').should('include', 'https://www.jenjensluxury.com/')
    })

    it('validate the catalog link', () => {
        cy.get('[data-cy=Catalog]').click()
        cy.location('pathname').should('include', '/collection/all')
    })
})