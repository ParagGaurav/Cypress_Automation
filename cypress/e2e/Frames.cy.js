import 'cypress-iframe';

describe('Handling frame', () => {
  it('approach1', () => {
    cy.visit("https://the-internet.herokuapp.com/iframe")

    // Wait for the iframe to load
    cy.frameLoaded('#mce_0_ifr')

    // Switch to the iframe and interact with it
   
    cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")
    cy.get("button[title='Bold']").click();


  });
});
