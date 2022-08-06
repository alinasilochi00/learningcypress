/// <reference types="cypress-xpath" />

describe(" Test contact Us via Automation Test Store", () => {
    it('Should be able to to submit a successful submission contact us form', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Inna')
        cy.get('#ContactUsFrm_email').type('email@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Bunaaaaa , ce mai faci, vrei sa ne vedem la pranz?')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
})


