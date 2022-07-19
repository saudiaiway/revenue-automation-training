describe("PUT and DELETE", () => {
  // it("update a user", () => {
  //   cy.request({
  //     method: "GET",
  //     url: "https://reqres.in/api/users/2",
  //   }).then((response) => {
  //     cy.log("response: ", response);
  //     expect(response.status).to.equal(200);
  //     cy.request({
  //       method: "PUT",
  //       url: "https://reqres.in/api/users/2",
  //       body: {
  //         name: "yan",
  //         job: "qa",
  //       },
  //     }).then((response) => {
  //       cy.log("response: ", response);
  //       expect(response.body.name).eq("yan");
  //     });
  //   });
  // });

  it("delete a user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        email: "saudia.iway@gmail.com",
        password: "password",
      },
    }).then((response) => {
      const id = response.body.id;
      cy.log("response: ", response);
      expect(response.status).to.equal(201);
      cy.request({
        method: "DELETE",
        url: "https://reqres.in/api/users/" + id,
      }).then((response) => {
        cy.log("response: ", response);
        expect(response.status).to.equal(204);
      });
    });
  });
});
