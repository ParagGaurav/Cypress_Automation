describe('My first Test', () => {
    it('Verify title-positive test', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Verify titile-Negative test', () => {
        //steps
       cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })

})