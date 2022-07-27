/// <reference types="Cypress" />

describe('Intercept with Cypress', () => {

  it('test API with Simple Intercept', () => {

      cy.visit('https://jsonplaceholder.typicode.com/')

      cy.intercept({
          path: '/posts'
      }).as('posts')

      cy.get("table:nth-of-type(1) a[href='/posts']").click()

      cy.wait('@posts').then((inter) => {
          cy.log(JSON.stringify(inter))
          expect(inter.response.body).to.have.length(100)
      })
  })

  

  // it('Mocking with Intercept Test with Static Response', () => {

  //     cy.visit('https://jsonplaceholder.typicode.com/')
  //     cy.intercept('GET', '/posts', { totalpost: 5 , name: 'pau'}).as('posts')
  //     cy.get("table:nth-of-type(1) a[href='/posts']".click)
  //     cy.wait.apply('@posts')
  // })


  // it('Mocking with Intercept Test with Dynamic Ficture', () => {

  //     cy.visit('https://jsonplaceholder.typicode.com/')
  //     cy.intercept('GET', '/posts', { fixture: 'createuser.json'}).as('posts')
  //     cy.get("table:nth-of-type(1) a[href='/posts']".click)
  //     cy.wait.apply('@posts')
  // })

})