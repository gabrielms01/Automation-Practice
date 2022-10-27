/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }
  
    preencheEmail() {
        cy.get(loginElements.informarEmail()).should('be.visible').type("teste2021@teste.com.br")
    }

    preencheSenha() {
        cy.get(loginElements.informarSenha()).should('be.visible').type("teste")
    }

    clicaEmLogar() {
        cy.get(loginElements.clicarLogar()).click()
    }

    // Valido que estou logado
    validarQueEstouLogado() {
        cy.get(loginElements.validoQueEstouLogado()).should('contain', 'My account')
    }
}

export default LoginPage;