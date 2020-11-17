import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

//test steps 
Given('I visit google', function(){
    cy.visit('https://www.jw.org')
    this.map.set('pino', 'ciao')
    cy.log(this.map)
})