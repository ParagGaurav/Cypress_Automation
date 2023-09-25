describe('mouse hover handling',()=>{

    it('MouseHover',()=>{

        cy.visit("https://demo.opencart.com/")

        cy.xpath('//div[@class="collapse navbar-collapse"]//a[text()="Desktops"]').trigger('mouseover').click()



    })


})