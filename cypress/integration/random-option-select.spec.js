it('selects a random option from a select dropdown', () => {
    cy.visit('src/index.html')
  
    cy.get('select option')
      .its('length', { log: false }).then(n => {
        cy.get('select').select(Cypress._.random(1, n - 1))
      })
  })