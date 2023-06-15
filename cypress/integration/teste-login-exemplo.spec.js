describe('Login', () => {
    it('com sucesso', () => {
      cy.visit('https://exemplo.com/login')
  
      cy.get('#user')
        .type(Cypress.env('user_name'))
      cy.get('#password')
        .type(Cypress.env('user_password'), { log: false })
      cy.contains('Login').click()
  
      cy.get('.navbar-top .avatar')
        .should('be.visible')
    })
  })