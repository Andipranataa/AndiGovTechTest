// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import elements from "./elements.js"

Cypress.Commands.add('LoginValidData', (data) => {
    cy.visit(data.url)
    cy.get(elements.Login_Username).should('be.visible').type(data.Username1)
    cy.get(elements.Login_Password).should('be.visible').type(data.PasswordforAll)
    cy.get(elements.Button_login).should('be.visible').click()
})

