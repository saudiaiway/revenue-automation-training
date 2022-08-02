/// <reference types="Cypress" />

describe("get and post user", () => {
    
    let token = "Bearer 25f4f0ee15da0f305918013799596b3b70b9a6cbd4833e3ea7efeef5aef8a487"
    let url = "https://gorest.co.in/public"

    it ("get user", () => {
        cy.request({
            method: "GET", 
            url: url + "/v2/users/"
        }).then((res) => {
            cy.log("response:", res)
            expect(res.status).to.eq(200)
        })

    })
})