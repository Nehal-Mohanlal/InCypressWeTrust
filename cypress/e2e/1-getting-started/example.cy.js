/// <reference types="cypress" /> 

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    });
}) 

it('input something', ()=>{
    cy.get('#search').type("Cypress hill") 
})

it("click the search button"), ()=>{
    cy.get('#search-container').click() 
}
