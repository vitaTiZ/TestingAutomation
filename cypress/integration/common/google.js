import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

//test steps 
Given('I visit google', function(){
    cy.visit('https://www.google.com')
})