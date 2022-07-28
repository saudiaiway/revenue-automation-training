/// <reference types="cypress" />

describe('GET API User', () => {

// Initialize variables
let accessToken = '4f36013040d99a2d797c4226da473ba1f1c69ae45cbe510f7122416f10502dad'
let randomText = ""
let testEmail = ""

it('should get ALL users', () => {

  // Request (GET)
  cy.request({
    method: 'GET',
    url: 'https://gorest.co.in/public/v2/users',
    headers: {
      'Authorization': "Bearer " + accessToken
    }
  }).then((res) => {
    // Assert Response Status == 200
    expect(res.status).to.eq(200)
  })
})

it('should GET username', () => {
  // Request (GET)
  cy.request({
    method: 'GET',
    url: 'https://gorest.co.in/public/v2/users/3398',
    headers: {
      'Authorization': "Bearer " + accessToken
    }
  }).then((res) => {
    // Assert username
    expect(res.body.name).to.eq('Hiranya Deshpande')
  })
})


it('should create new user', () => {
  var pattern = "QWERTYUIIOPASDFGHJKLZXCVBNMqwertyyuio[asdfghjklzxcvbnm"
  for (var i = 0; i < 10; i++)
    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + '@gmail.com'

  cy.request({
    // Request (POST)
    method: 'POST',
    url: 'https://gorest.co.in/public/v2/users',
    headers: {
      'Authorization': "Bearer " + accessToken
    },
    body: {
      "email": testEmail,
      "name": "Pauuuuu",
      "gender": "female",
      "status": "active"
    }

  }).then((res) => {
    cy.log(JSON.stringify(res))
    // Assert newly created user
    expect(res.status).to.eq(201)
    expect(res.body).has.property('email', testEmail)
    expect(res.body).has.property('name', "Pauuuuu")
    expect(res.body).has.property('gender', "female")
    expect(res.body).has.property('status', "active")
  }).then((res) => {
    const userId = res.body.id
    cy.log("User ID is: " + userId)

    // GET created user
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/' + userId,
      headers: {
        'Authorization': "Bearer " + accessToken
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).has.property('email', testEmail)
      expect(res.body).has.property('name', "Pauuuuu")
      expect(res.body).has.property('gender', "female")
      expect(res.body).has.property('status', "active")
    })
  })
})
})