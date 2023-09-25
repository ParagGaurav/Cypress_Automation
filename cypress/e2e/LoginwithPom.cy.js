import Login from "../PageObejects/LoginPage";
import { Utility } from "./utlity";
describe('pom',()=>{

    it('VerifyLogin',()=>{

    

    cy.fixture('OrangeHRM').then((data) =>{
        const url = new Utility().getBaseUrl();
        cy.visit(url);
        
        const ln = new Login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.VerfiyLogin();
        })



    })

   
})