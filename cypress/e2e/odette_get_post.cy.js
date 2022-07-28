it("GET and POST", () => {
    cy.request({
        method: "GET",
        url: "https://gorest.co.in/public/v2/users",
       }).then((response) => {
        cy.log("response: ", response);
        expect(response.status).to.equal(200);
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
          Authorization: "Bearer 09ba5beb1d11986dc92274919a158d750c4cc884500b4e72b9e842563e60542b",
      },
      body: {
        id: "3983",
        name: "Odette saavedra1",
        email: "odette1@gmail.com",
        gender: "female",
        status: "active",
      },
    }).then((response) => {
      const id = response.body.id;
      cy.log("response: ", response);
      expect(response.status).to.equal(201);
      });
    });
  });
