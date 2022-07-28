describe("Get and Post", () => {
    let accessToken = "Bearer 09ba5beb1d11986dc92274919a158d750c4cc884500b4e72b9e842563e60542b";

    it ("Get Users", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/6"
        }).then((response) => {
            cy.log("response", response);
            expect(response.status).to.equal(200);
        })
    })

    it("Post Users", () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Cobi swartz",
                "email": "cobicobi12@gmail.com",
                "gender": "Male",
                "status": "active",
            },
            headers: {
                Authorization: accessToken
            },
        }).then((response) => {
            const body = response.body.id;
            cy.log("response", response);
            expect(response.status).to.equal(201);
            expect(response.body.name).to.equal("Cobi swartz");
        })
    })
})