/// <reference types="Cypress" />

describe("Sample Test", () => {
    it("intercept a request", () =>{
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept({
        path: "/posts",
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts").then((inter) => {
        cy.log(JSON.stringify(inter));
        console.log(inter);
        expect(inter.response.body).to.have.length(100);
        })
    })
})