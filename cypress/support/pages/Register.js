import { expect } from "chai";

const signUpNowBtn = '//button[span[contains(text(),"SIGN UP NOW")]]';
const firstNameInputField = 'input[formcontrolname="firstName"]';
const lastNameInputField = 'input[formcontrolname="lastName"]';
const emailInputField = 'input[formcontrolname="email"]';
const compNameInput = 'input[formcontrolname="companyName"]';
const mobileNumberInput = 'input[formcontrolname="mobileNumber"]';
const passwordInput = 'input[formcontrolname="password"]';
const confirmPasswordIinput = 'input[formcontrolname="confirmPassword"]';
const registerButton = 'button[type="submit"]';
const backToLoginLink = "a.bottom-log-link";
const registerField = (regField) => `input[formcontrolname="${regField}"]`;
const mandatoryFieldError = (inputField) =>
  `input[formcontrolname="${inputField}"] +bfv-messages span.invalid-feedback`;
const firstLastNameValidation = (firstlast) =>
  `input[formcontrolname="${firstlast}"] +bfv-messages span.invalid-feedback`;
const loginButton = 'button[type="submit"]';
const duplicateEmailError =
  '//div[@role="alertdialog" and contains(text(),"is already in use")]';
const profilePic = ".profile-pic";
const logout = '.log-out img[src*="log-out"]';

export default class Register {
  clickSignUpNowButton() {
    cy.xpath(signUpNowBtn).click();
  }

  enterFirstName(first_name) {
    cy.get(firstNameInputField).type(first_name);
  }

  enterLastName(last_name) {
    cy.get(lastNameInputField).type(last_name);
  }

  enterEmail(email) {
    cy.get(emailInputField).type(email);
  }

  enterCompanyName(comp_name) {
    cy.get(compNameInput).type(comp_name);
  }

  enterMobileNumber(mobileNum) {
    cy.get(mobileNumberInput).type(mobileNum);
  }

  enterPassword(password) {
    cy.get(passwordInput).type(password);
  }

  clearForgetPassword() {
    cy.get(confirmPasswordIinput).clear();
  }

  enterConfirmPassword(confirmPassword) {
    cy.get(confirmPasswordIinput).type(confirmPassword);
  }

  clickRegisterButton() {
    cy.get(registerButton).click();
  }

  verifyRegisterButton() {
    cy.get(registerButton).should("be.visible");
  }

  clickBackToLoginLink() {
    cy.get(backToLoginLink).click();
  }

  verifyBackToLoginLink() {
    cy.get(backToLoginLink).should("be.visible");
  }

  verifyRegisterFields(allField) {
    cy.get(registerField(allField)).should("be.visible");
  }

  verifyRequiredField(mand) {
    cy.get(mandatoryFieldError(mand)).should("be.visible");
  }

  verifyValidationOnFirstLastField(inputField) {
    cy.get(firstLastNameValidation(inputField)).then((errText) => {
      expect(errText.text()).to.contain(
        "can contain alphabets, numbers and special characters"
      );
    });
  }

  verifyMobileValidation(mobile) {
    cy.get(mandatoryFieldError(mobile)).then((errText) => {
      expect(errText.text()).to.contain("must be at least 10 characters");
    });
  }

  verifyEmailValidation(email) {
    cy.get(mandatoryFieldError(email)).then((errText) => {
      expect(errText.text()).to.contain("Invalid email address");
    });
  }

  verifyMobileInputFieldError(mobile) {
    cy.get(mandatoryFieldError(mobile)).then((errName) => {
      expect(errName.text()).to.contain("This field is required");
    });
  }

  verifyMandatoryFieldError(mobile) {
    cy.get(mandatoryFieldError(mobile)).then((errName) => {
      expect(errName.text()).to.contain(`can't be blank`);
    });
  }

  verifyLoginButton() {
    cy.get(loginButton).should("be.visible");
  }

  verifyDuplicateEmailError() {
    cy.xpath(duplicateEmailError).should("be.visible");
  }

  verifySuccessfullRegister() {
    cy.get(profilePic, { timeout: 15000 }).should("be.visible");
  }

  clickLogout() {
    cy.wait(1000);
    cy.get(profilePic).click();
    cy.wait(1000);
    cy.get(logout).click();
    cy.get(loginButton, { timeout: 10000 }).should("be.visible");
  }
}
