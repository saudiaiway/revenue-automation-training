/// <reference types="cypress" />

describe('GET API User', ()=>{
  let accessToken = '8234f05f7636dc07d8685713857d4f82691cda2dbe6cf86c6121aecfa5775101'
  it('GET User', ()=>{
      cy.request({
          method : 'GET',
          url : 'https://gorest.co.in/public/v2/users',
          headers : {
              'Authorization' : "Bearer " + accessToken
          }
      }).then((res)=>{
          expect(res.status).to.eq(200)
      })
  })
})


describe('Post API user request', ()=>{
  let accessToken = '8234f05f7636dc07d8685713857d4f82691cda2dbe6cf86c6121aecfa5775101'
  let randomText = ""
  let testEmail = ""
  it('create user test', ()=> {
      var pattern = "QWERTYUIIOPASDFGHJKLZXCVBNMqwertyyuio[asdfghjklzxcvbnm"
      for (var i=0; i<10; i++)
      randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
      testEmail = randomText + '@gmail.com'
      cy.request({
          method : 'POST',
          url : 'https://gorest.co.in/public/v2/users',
          headers : {
              'Authorization' : "Bearer " + accessToken
          },
          body : {
              "name": "KEITH15",
              "email": testEmail,
              "gender": "male",
              "status": "inactive"
          }
      }).then((res)=>{
          cy.log(JSON.stringify(res))
          expect(res.status).to.eq(201)
          expect(res.body).has.property('email', testEmail)
          expect(res.body).has.property('name', "KEITH15")
          expect(res.body).has.property('gender', "male")
          expect(res.body).has.property('status', "inactive")
      })
  })
})
