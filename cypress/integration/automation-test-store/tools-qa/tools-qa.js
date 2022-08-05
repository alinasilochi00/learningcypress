describe ('Should fine some elements', () => {
    // it('Should find some elements', () => {
    //     cy.visit('https://automationteststore.com/')
    //     const makeup = cy.get('a[href*=\'category&path=\']').contains('Makeup').click()
    //
    //     const skincare = cy.get('a[href*=\'category&path=\']').contains('Skincare').click()
    //
    // });
    it('Should find some elements', () => {
        cy.visit('https://automationteststore.com/')
        const makeup = cy.get('a[href*=\'category&path=\']').contains('Makeup').click()
        cy.get('h1 .maintext').then(($makeUpTest) => {
            const makeUpTest= $makeUpTest.text()
            // noinspection JSCheckFunctionSignatures
            cy.log(makeUpTest)
        })
    })

})

