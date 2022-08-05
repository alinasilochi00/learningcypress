describe ('Should test login inputs', () => {
    it('Should be able to submit a succesfull submision', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get("a[href$='contact']").click()
        cy.get("[id='ContactUsFrm_first_name']").type('Gigi')
        cy.get("[id='ContactUsFrm_email']").type('lili@gmail.com')
        cy.get("[id='ContactUsFrm_email']").should('have.attr', 'name', 'email')
        cy.get("[id='ContactUsFrm_enquiry']").type('Bunaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa, heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeei')
        cy.get("button[class='btn btn-primary lock-on-click']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    })
} )