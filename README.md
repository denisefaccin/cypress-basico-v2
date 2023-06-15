# Testes automatizados com Cypress - Básico
## O que você vai aprender

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para seu projeto de testes automatizados

## Pré-requisitos

É necessário ter o Node.js e npm instalados para executar este projeto.

Eu usei as versões v16.13.2 e 8.1.2 do Node.js e npm, respectivamente. Sugiro você usar o mesmo ou versões mais atuais.

## Como instalar as dependências

Run npm install (ou npm i) para istalar as dependências de desenvolvimento.

## Como rodar os testes

Nota: Antes de rodar os testes, faça uma cópia do arquivo cypress.env.example.json e nomeie como cypress.env.json, o que você vai usar na verdade para guardar suas senhas e credenciais, dados sensíveis que não poderão ser versionados.

Lembre de que o arquivos cypress.env.json deve ser incluído no arquivo .gitignore para que seus dados sensíveis não sejam versionados.

Run npm test para rodar os testes em modo headless.

Ou, npm run cy:mobile para abrir no viewport de mobile. 

Ou, npm run cy:open para abrir o Cypress no modo interativo no browser.

