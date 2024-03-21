describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://nehal-mohanlal.github.io/portfolio_site/')
    cy.get('button').click()
  })
})


// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://nehal-mohanlal.github.io/portfolio_site/')
//     cy.get('h1').contains("Nehal Mohanlal") 
//   })
// })
