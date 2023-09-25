
describe('Assertions', () => {

    it('implicit assertion',() => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo Visible
        .and('exist') // logo exist

        cy.xpath("//a").should('have.length','5') // No of Links 
        cy.get("[placeholder='Username']").type("Admin")// provide a value into inputbox
        cy.get("[placeholder='Username']").should('have.value','Admin')
    

    })

    it('explicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[placeholder='Username']").type("Admin")// provide a value into inputbox
        cy.get("[placeholder='Password']").type("admin123")// provide a value into inputbox
        cy.get("[type='submit']").click()

        let expName = "Kajal Ghodke"
        cy.get('.oxd-userdropdown-name').then((x) => {

            let actName = x.text()

            // BDD style 
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            // TDD Style 

            assert.equal(actName,expName)
            assert.not.equal(actName,expName)


        })
       





    })




})