class Login


{
    txtUserName="input[name='username']";
    txtPassword="input[name = 'password']";
    btnSubmit="button[type='submit']";
    lblMsg=".oxd-topbar-header-breadcrumb> .oxd-text";


    setUserName(username){
        cy.get(this.txtUserName).type(username);  
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }
    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }
    VerfiyLogin(){
        cy.get(this.lblMsg).should('have.text','Dashboard');
    }
}
export default Login;