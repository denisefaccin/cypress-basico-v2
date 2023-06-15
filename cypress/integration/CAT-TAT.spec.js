
/// <reference types="Cypress" />


 
describe('Central de Atendimento ao Cliente TAT', function() {
    
    beforeEach(() => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        
      })

    it('verifica o título da aplicação', function() {
        cy.title('Central de Atendimento ao Cliente TAT').should('exist')

    });

    it('preenche campos obrigatórios e envia formulário', function() {
        const longText = 'teste, teste, teste, teste, teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,'

        cy.get('#firstName').type('Denise')
        cy.get('#lastName').type('Faccin')
        cy.get('#email').type('denisefaccin@gmail.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
  
    });

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Denise')
        cy.get('#lastName').type('Faccin')
        cy.get('#email').type('denisefaccin.gmail.com')
        cy.get('#open-text-area').type('teste com email invalido')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    it('valor de telefone vazio se for digitado valores não numéricos', ()=>{
        cy.get('#phone').type('abcdefjklm').should('have.value', '')
    });

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', ()=>{
        cy.get('#firstName').type('Denise')
        cy.get('#lastName').type('Faccin')
        cy.get('#email').type('denisefaccin@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('teste com telefone obrigatorio não preenchido')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    it('preenche e limpa os campos nome, sobrenome, email e telefone', ()=>{
        cy.get('#firstName').type('Denise').should('have.value', 'Denise').clear().should('have.value', '')
        cy.get('#lastName').type('Faccin').should('have.value', 'Faccin').clear().should('have.value', '')
        cy.get('#email').type('denisefaccin@gmail.com').should('have.value', 'denisefaccin@gmail.com').clear().should('have.value', '')
        cy.get('#open-text-area').type('teste de preencher e apagar campos').should('have.value', 'teste de preencher e apagar campos').clear().should('have.value', '')
         
    });
    
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', ()=>{
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    });

    it('envia o formuário com sucesso usando um comando customizado', ()=>{
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    });

    it('seleciona um produto (YouTube) por seu texto', ()=>{
        cy.get('#product').select('YouTube').should('have.value', 'youtube')

    });

    it('seleciona um produto (Mentoria) por seu valor', ()=>{
        cy.get('#product').select('Mentoria').should('have.value', 'mentoria')

    });
    it('seleciona um produto (Blog) por seu índice', ()=>{
        cy.get('#product').select(1).should('have.value', 'blog')

    });

    it('marca o tipo de atendimento "Feedback"', ()=>{
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')

    });

    it('marca cada tipo de atendimento', ()=>{
        cy.get('input[type="radio"]').should('have.length', 3).each(($radio)=>{
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })

    });

    it('marca ambos os checkboxes, depois desmarca o último', ()=>{
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')

    });

    it('seleciona um arquivo da pasta fixtures', ()=>{
        cy.get('#file-upload')
          .selectFile('./cypress/fixtures/example.json')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
        
    });

    it('carrega um arquivo por drag-drop', ()=>{
        cy.get('#file-upload')
          .selectFile('./cypress/fixtures/example.json', {action: "drag-drop"})
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
        
    });

    it('carrega um arquivo da fixtures que recebeu um alias', ()=>{
        cy.fixture('example.json').as('exampleFile');
        cy.get('#file-upload')
          .selectFile('@exampleFile')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
        
    });

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', ()=>{
        cy.fixture('example.json').as('exampleFile');
        cy.get('#file-upload')
          .selectFile('@exampleFile')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
        
    });

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', ()=>{
        cy.get('#privacy a').should('have.attr', 'target', '_blank')        
    });


    it('acessa a página da política de privacidade removendo o target e então clicando no link', ()=>{
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        cy.contains('Talking About Testing').should('be.visible')        
    });

    it('testa a página da política de privacidade de forma independente', ()=>{
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')

    });

  })