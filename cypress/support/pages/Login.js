const signUpNowBtn = '//button[span[contains(text(),"SIGN UP NOW")]]';
const emailInputField = 'input[formcontrolname="userId"]';
const passwordInput = 'input[formcontrolname="password"]';
const profilePic = ".profile-pic";
const logout = ".log-out";
const loginButton = 'button[type="submit"]';
const resetPasswordLink = "a.reset-pwd";
const termsServicesCheckBox = "span.checkmark";
const eyeIcon = "span.pwd-visibilty";
const backToSignUpLink = "a.bottom-log-link";
const emailPasswordError = (emailPass) =>
  `input[formcontrolname="${emailPass}"] + bfv-messages span.invalid-feedback`;
const checkBoxError = ".custom-checkbox span.invalid-feedback";
const termsCheckBox = 'input[formcontrolname="termOfServices"]';
const invalidLoginDialog = "div.modal-body p";
const okBtnDialog = "div.modal-footer button";
const termsOfServLink = '.custom-checkbox a[href*="terms"]';
const resetPasswordPage = "#requestPasswordResetForm";
const backToSignInBtn = '//button[span[contains(text(),"BACK TO SIGN IN")]]';
const dialogTitle = "h4.modal-title";
const resetEmailInput = 'input[formcontrolname="email"]';

export default class Login {
  clickSignUpNowButton() {
    cy.xpath(signUpNowBtn).click();
  }

  enterEmail(email) {
    cy.get(emailInputField).clear();
    cy.get(emailInputField).type(email);
  }

  enterPassword(password) {
    cy.get(passwordInput).clear();
    cy.get(passwordInput).type(password);
  }

  verifyLoginButton() {
    cy.get(loginButton).should("be.visible");
  }

  clickLogout() {
    cy.get(profilePic).click();
    cy.get(logout).click();
    cy.get(loginButton, { timeout: 10000 }).should("be.visible");
  }

  verifyEmailInputField() {
    cy.get(emailInputField).should("be.visible");
  }

  verifyPasswordInputField() {
    cy.get(passwordInput).should("be.visible");
  }

  verifyResetPasswordLink() {
    cy.get(resetPasswordLink).should("be.visible");
  }

  verifySignUpButton() {
    cy.xpath(signUpNowBtn).should("be.visible");
  }

  verifyTermsCheckbox() {
    cy.get(termsServicesCheckBox).should("be.visible");
  }

  verifyEyeIcon() {
    cy.get(eyeIcon).should("be.visible");
  }

  verifyBackToSignUpLink() {
    cy.get(backToSignUpLink).should("be.visible");
  }

  clickForgetPasswordLink() {
    cy.get(resetPasswordLink).click();
  }

  clickBackToSignUpLink() {
    cy.get(backToSignUpLink).click();
  }

  clickLoginButton() {
    cy.get(loginButton).click();
  }

  verifyEmailPasswordField(mand) {
    cy.get(emailPasswordError(mand)).then((errText) => {
      expect(errText.text()).to.contain("can't be blank");
    });
  }

  verifyInvalidEmail(invalidEmail) {
    cy.get(emailPasswordError(invalidEmail)).then((errText) => {
      expect(errText.text()).to.contain("Invalid email address");
    });
  }

  clickOnCheckBox() {
    cy.get(termsCheckBox).click();
  }

  verifyTermsOfServicesError() {
    cy.get(checkBoxError).should("be.visible");
  }

  verifyLoginFailedError() {
    cy.get(invalidLoginDialog).then((errText) => {
      expect(errText.text()).to.contain("Login failed");
    });
  }

  clickOkButtonOnDialog() {
    cy.get(okBtnDialog).click();
  }

  verifyDilaogOpened() {
    cy.get(okBtnDialog).should("be.visible");
  }

  verifyResetPasswordPage() {
    cy.get(resetPasswordPage).should("be.visible");
  }

  verifyBackTOSignInBtn() {
    cy.xpath(backToSignInBtn).should("be.visible");
  }

  clickBackToSIgnInBtn() {
    cy.xpath(backToSignInBtn).click();
  }

  // VerifyTermsOfservLink() {
  //   cy.get(termsOfServLink)
  //     .invoke("attr", "href")
  //     .then((href) => {
  //       cy.log(href);
  //       cy.visit(href);
  //     });
  // }

  clickResetButton() {
    cy.get(loginButton).click();
  }

  verifyDialogTitle() {
    cy.get(dialogTitle).then((title) => {
      expect(title.text()).to.contain("Account Not Found");
    });
  }

  enterResetEmail(email) {
    cy.get(resetEmailInput).clear();
    cy.get(resetEmailInput).type(email);
  }

  verifyDialogSuccessTitle() {
    cy.get(dialogTitle).then((title) => {
      expect(title.text()).to.contain("Email Sent");
    });
  }

  verifySuccessfullLogin() {
    cy.get(profilePic, { timeout: 15000 }).should("be.visible");
  }
}
