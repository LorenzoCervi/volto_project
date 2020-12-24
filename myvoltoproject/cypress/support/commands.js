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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// --- AUTOLOGIN -------------------------------------------------------------
Cypress.Commands.add('autologin', () => {
  let api_url, user, password;
  if (Cypress.env('API') === 'guillotina') {
    api_url = 'http://localhost:8081/db/web';
    user = 'admin';
    password = 'admin';
  } else {
    api_url = 'http://localhost:8080/Plone';
    user = 'admin';
    password = 'admin';
  }

  return cy
    .request({
      method: 'POST',
      url: `${api_url}/@login`,
      headers: { Accept: 'application/json' },
      body: { login: user, password: password },
    })
    .then((response) => cy.setCookie('auth_token', response.body.token));
});
