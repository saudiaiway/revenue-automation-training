/// <reference types="Cypress" />

describe("Sample Test", () => {
  it("intercept a request", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept({
      path: "/posts",
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then((inter) => {
      cy.log(JSON.stringify(inter));
      console.log(inter);
      expect(inter.response.body).to.have.length(100);
    });
  });

  it("mocking intercept with static response", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept("GET", "/posts", {
      totalpost: 5,
      name: "automation",
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts");
  });

  it.only("mocking intercept with dynamic fixtures", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept("GET", "/posts", { fixture: "users.json" }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts");
  });
});
