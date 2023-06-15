it('selects a random option from a select dropdown', () => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
  
    cy.get('select option')
      .its('length', { log: false }).then(n => {
        cy.get('select').select(Cypress._.random(n - 1))
      })
  })