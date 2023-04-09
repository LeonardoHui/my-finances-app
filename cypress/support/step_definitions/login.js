// As this is a simple project without many features, all steps will be kept here
// If the steps grow too much and start to have collision,
// move each one of them to the cypress/e2e/featureName/featureName.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the homepage", () => {
  cy.visit("http://localhost:3000");
});

When("I click the LOG_IN button", () => {
  cy.contains("Log in").click();
});

Then("I am redirected to the login page", () => {
  cy.url().should("include", "/account/login");
});

Given("I am on the login pagin", () => {
  cy.visit("http://localhost:3000/account/login");
});

When("I enter my email and password", () => {
  cy.get("[id=email]").type(`test@email.com`);
  cy.get("[id=password]").type(`test{enter}`);
  cy.sleep;
});

Then("I am redirected to my account dashboard", () => {
  cy.url().should("include", "/account/dashboard");
});

When("I enter an invalid email and password", () => {
  cy.get("[id=email]").type(`fake@email.com`);
  cy.get("[id=password]").type(`fake{enter}`);
  cy.sleep;
});

Then("I get an error message", () => {
  cy.url().should("eq", "http://localhost:3000/account/login");
  cy.contains("Not Authorized");
});
