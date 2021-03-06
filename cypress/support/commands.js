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

/// <reference types="cypress" />
import Login from "../support/pages/Login";
import Register from "./pages/Register";
const login = new Login();
const register = new Register();

Cypress.Commands.add("Login", (username, password) => {
  login.enterEmail(username);
  login.enterPassword(password);
  login.clickOnCheckBox();
  login.clickLoginButton();
  login.verifySuccessfullLogin();
});

Cypress.Commands.add("Logout", () => {
  register.clickLogout();
});
