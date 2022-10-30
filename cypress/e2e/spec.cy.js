describe("Testing homepage with cypress", () => {
  it("Checking slogan", () => {
    cy.visit("http://localhost:3003");
    cy.contains("See countries, their weathers and bordering countries.");
  });
});
