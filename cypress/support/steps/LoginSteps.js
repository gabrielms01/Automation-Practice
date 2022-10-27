/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site Automation Practice", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

When("informo meu email", () => {
    loginPage.preencheEmail();
})

When("informo minha senha", () => {
    loginPage.preencheSenha();
})

When("clico em logar", () => {
    loginPage.clicaEmLogar();
})

Then("valido que estou logado", () => {
    loginPage.validarQueEstouLogado();
})