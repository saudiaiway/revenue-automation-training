// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("getOtp", (contact_number, country_code) => {
  const OTP = cy
    .request({
      method: "GET",
      url:
        "/v1/sms/retrieve-otp-codes?cellphone=" +
        contact_number +
        "&country_code=" +
        country_code +
        "&rate_limit=2",
      headers: {
        "otp-secret-key": "782a6798b2f0ce9a01be38af39ef34bd",
      },
    })
    .then((response) => {
      return response.body.data[0].verification_code;
    });

  return OTP;
});
