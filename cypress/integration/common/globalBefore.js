import { Before } from "cypress-cucumber-preprocessor";

Before(function () {
    var map = new Map()
    cy.wrap(map).as('map')
})