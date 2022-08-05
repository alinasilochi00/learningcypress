/// <reference types="Cypress" />

describe('Test contact Us from via WebdriverUni', () => {
    it('Should be able to submit a successful submission via Contact us form',
        () => {
            //cypress code
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.title().should('include','WebDriver | Contact Us')
            cy.get('[name="first_name"]').type('Joe')
            cy.get('[name="last_name"]').type('Willy')
            cy.get('[name="email"]').type('sdgerh@dvndfh.com')
            cy.get('textarea.feedback-input').type('Hello')
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
})
    it('Should not be able to submit a successful submission via Contact us form', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Willy')

        cy.get('textarea.feedback-input').type('Hello')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });

