/// <reference types="cypress" />

describe("Registered users only", () => {
  beforeEach(() => {});

  it("can log into the user account page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login").click();
    cy.get("[id=email]").type(`tester_one@mail.com`);
    cy.get("[id=password]").type(`1111{enter}`);
    cy.sleep;
    cy.location("pathname").should("eq", "/account/dashboard");
  });
});
