describe('Sumbit the formum shoul be succesfull', ()=>{
    it('Submit forum', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

        cy.get("input[placeholder='First Name']").type('Anne')
        cy.get("input[placeholder='Last Name']").type('Anne')
        cy.get("input[placeholder='Email Address']").type('anne@gmail.com')
        cy.get("textarea[placeholder='Comments']").type('What are ou doing?')
        cy.get("input[type='submit']").click()



    })
})