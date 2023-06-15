Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ()=>{
    cy.get('#firstName').type('Denise')
    cy.get('#lastName').type('Faccin')
    cy.get('#email').type('denisefaccin@gmail.com')
    cy.get('#open-text-area').type('Comando customizado é melhor que page objects!')
    cy.contains('button', 'Enviar').click()
})
  
  
  