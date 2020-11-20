import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I access to app', function () {
    cy.visit('/')
})

Then('I see a text', function () {
    // cy.get('span[style="background-color: green"]').should('exist')
    cy.get('body home-page')
        .shadow()
        .find('game-view')
        .shadow()
        .find('div[class="content-container"]')
        .should('exist')
        .should('be.visible')
        .should('have.css','color','')
})

