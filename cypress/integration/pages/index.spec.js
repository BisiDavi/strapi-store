/// <reference types="cypress" />

describe('test the home page',() => {
    beforeEach(() => {
        cy.visit('https://www.jenjensluxury.com')
    })

    it('checks if the homepage slider displays', () => {
        cy.get('[data-cy=homepageSlider]').should('be.visible')
    })

    it('checks if collections components displays', () => {
        cy.get('[data-cy=collections]').should('be.visible')
    })
})