/// <reference types="cypress"/>

describe('Verify variables', () => {
    it('Navigat to specific page', () => {
        cy.visit('https://automationteststore.com/')
        const makeupPage = cy
            .get("a[href$='=product/category&path=36']")
            .click()
        const skincarePage = cy
            .get("a[href*='product/category&path']")
            .contains('Skincare')
            .click()
    });
});

//Use cypress commands and chainig
it('Validate proprieties of Contact Us page', () => {
    cy.visit('https://automationteststore.com/')
    cy.xpath(`//*[@id="footer"]/footer/section[2]/div/div[1]/div/ul/li[5]/a`)
});

//JQuery Approche

// Embedded comands (Closure)

