const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  //for html reports 
  e2e: {
    baseUrl:'https://wwww.facebook.com',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // for html reports

      // implement node event listeners here
      
    },
  },
});
