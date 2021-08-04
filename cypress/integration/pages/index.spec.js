/// <reference types="cypress" />

describe('test the home page',() => {
    beforeEach(() => {
        cy.visit('https://www.jenjensluxury.com/')
    })

    it('checks if the homepage slider displays', () => {
        cy.get('[data-cy=homepageSlider]').should('be.visible')
    })

    it('checks if collections components displays', () => {
        cy.get('[data-cy=collections]').should('be.visible')
    })

    it('checks for productlist components', () => {
        cy.get('[data-cy=productsList]').should('be.visible')
    })

    it('checks for view more button', () => {
        cy.get('[data-cy=viewmore]').should('be.visible')
    })

    it('checks for newsletter form', () => {
        cy.get('[data-cy=newsletter]').should('be.visible')
    })

    it('checks for instagram slider', () => {
        cy.get('[data-cy=instaslider]').should('be.visible')
    })
})