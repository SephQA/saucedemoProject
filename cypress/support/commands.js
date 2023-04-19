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

Cypress.Commands.add(
  "loginViaUi",
  (
    userName = Cypress.env("user_name"),
    passWord = Cypress.env("pass_word")
  ) => {
    cy.visit("/");
    cy.get("[data-test=username]").click().focus().type(userName);
    cy.get("[data-test=password]").click().focus().type(passWord);
    cy.get("[data-test=login-button").click();
  }
);
