export class Utility{
    getBaseUrl() {
        let envi = Cypress.env('ENV');
        if(envi == 'PROD') {
            return "https://www.google.com"
        } else if(envi == 'DEV') {
            return "https://www.facebook.com"
        }
    }
}