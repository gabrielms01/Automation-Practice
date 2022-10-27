Feature: Login site Automation Practice

    Scenario: Realizar login no site Automation Practice
        Given acesso o site Automation Practice
        When acesso a pagina de login
        When informo meu email
        When informo minha senha
        When clico em logar
        Then valido que estou logado