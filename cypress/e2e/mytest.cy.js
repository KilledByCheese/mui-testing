describe("my test spec", () => {
  it("form test", () => {
    cy.visit("http://localhost:3000");

    cy.get(
      '[href="/form"] > .MuiListItem-root > .MuiListItemButton-root'
    ).click();
    cy.get("#SelectGenderType").click();

    cy.get('[data-value="m"]').click();

    cy.get("form > :nth-child(1) > :nth-child(2)").type("Max");
    cy.get("form > :nth-child(1) > :nth-child(3)").type("Mustermann");

    cy.get(".MuiButton-root").click();
  });
});
