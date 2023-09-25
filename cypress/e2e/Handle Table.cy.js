

describe('web table',()=>{

    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get('#input-username').type("demo")
        cy.get('#input-password').type("demo")
        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()

        // Customers ----> Customers
        cy.get('#menu-customer>a').click()
        cy.xpath('//ul[@id="collapse-5"]//a[contains(text(),"Customers")]').click()
    })

    it.skip('Check Number Rows & Columns',()=>{

        cy.xpath('//table[@class="table table-bordered table-hover"]//tbody//tr').should('have.length','10')
        cy.xpath('//table[@class="table table-bordered table-hover"]//thead//tr//td').should('have.length','7')
        

        
    })

    it.only('check the data drom specific row & column',()=>{

        cy.xpath('//table[@class="table table-bordered table-hover"]//tbody//tr[6]//td[3]') // X-path
        //cy.get('.table>tbody>tr:nth-child(6)>td:nth-child(3)') // Css selector
        .should('contain','ghh56@gmail.com')

    })

    it('Read all the rows & Columns data in first page',()=>{
        cy.get('table>tbody>tr')

    })








})