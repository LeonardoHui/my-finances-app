/// <reference types="cypress" />

describe("Registered users only", () => {
  beforeEach(() => {});

  it("can see account investments", () => {
    //TODO
  });

  it("can add new events", () => {
    // Intentionally to fail
    cy.get("[id=new-event]").should("exist");
  });
});
