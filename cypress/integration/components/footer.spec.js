/// <reference types="cypress" />


context('Footer',() => {
    
    it('check the footer link number equal 4 links', () => {
        cy.get('[data-cy=footerlink]').find('li').find('a')
        .should('have.length', 4)
    })

    it('check the validity of the footer link name', () => {
        cy.get('[data-cy=footerlink]').first()
        .should('contain', 'Privacy Policy')
    })

    it('check the validality of the footer link when clicked', () => {
        cy.get('[data-cy=footerlink]').first()
        .click()
        cy.location('pathname').should('include', '/policy/privacy-policy')
    })
})