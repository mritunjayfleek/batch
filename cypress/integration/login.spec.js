import Login from "../support/pages/Login";
import RegsiterPage from "../support/pages/Register";
let fixtureData;

const loginPage = new Login();
const regPage = new RegsiterPage();

describe("Validate login page with all scenarios", () => {
  before(() => {
    cy.fixture("constants")
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit("/", { failOnStatusCode: false });
      });
  });

  after(() => {
    cy.Logout();
  });

  it("SKT-T9: Verify elements on Login page", () => {
    loginPage.verifyEmailInputField();
    loginPage.verifyPasswordInputField();
    loginPage.verifyEyeIcon();
    loginPage.verifyResetPasswordLink();
    loginPage.verifyTermsCheckbox();
    loginPage.verifyLoginButton();
    loginPage.verifySignUpButton();
    loginPage.verifyBackToSignUpLink();
  });

  it("SKT-T10: Verify Required Fields", () => {
    loginPage.clickLoginButton();
    loginPage.verifyEmailPasswordField("userId");
    // loginPage.verifyEmailPasswordField("password");
    // loginPage.verifyTermsOfServicesError();
  });

  it("SKT-T11: Verify validation on Email", () => {
    loginPage.enterEmail("invalid");
    loginPage.enterPassword(fixtureData.password);
    loginPage.clickOnCheckBox();
    loginPage.clickLoginButton();
    loginPage.verifyInvalidEmail("userId");
  });

  it("SKT-T12: Verify login with invalid credentials", () => {
    loginPage.enterEmail(fixtureData.email);
    loginPage.enterPassword("wrong");
    loginPage.clickLoginButton();
    loginPage.verifyLoginFailedError();
    loginPage.clickOkButtonOnDialog();
  });

  it("SKT-T13: Verify Terms and privacy policy link checkbox.", () => {
    loginPage.enterEmail(fixtureData.email);
    loginPage.enterPassword(fixtureData.password);
    loginPage.clickOnCheckBox();
    loginPage.clickLoginButton();
    loginPage.verifyTermsOfServicesError();
  });

  it("SKT-T15: Verify 'Signup now' button should be clickable.", () => {
    regPage.clickSignUpNowButton();
    regPage.verifyRegisterFields("firstName");
    regPage.verifyRegisterFields("lastName");
    regPage.verifyBackToLoginLink();
    regPage.clickBackToLoginLink();
  });

  it("SKT-T16: Verify 'back to signup' link in right card should be clickable.", () => {
    loginPage.clickBackToSignUpLink();
    regPage.verifyRegisterFields("firstName");
    regPage.verifyRegisterFields("lastName");
    regPage.verifyBackToLoginLink();
    regPage.clickBackToLoginLink();
  });

  it("SKT-T17: Verify Forget your password link.", () => {
    loginPage.clickForgetPasswordLink();
    loginPage.verifyResetPasswordPage();
  });

  it("SKT-T18: Verify elements on Forget your password page", () => {
    loginPage.verifyResetPasswordPage();
    regPage.verifyRegisterFields("email");
    loginPage.verifyLoginButton();
    loginPage.verifyBackTOSignInBtn();
    loginPage.verifyBackToSignUpLink();
  });

  it("SKT-T19: Verify mandatory fields on Reset page.", () => {
    loginPage.clickResetButton();
    regPage.verifyMandatoryFieldError("email");
  });

  it("SKT-T20: Verify reset password with wrong email.", () => {
    loginPage.enterResetEmail("invalid");
    loginPage.clickResetButton();
    loginPage.verifyInvalidEmail("email");
  });

  it("SKT-T21: Verify reset password with invalid email Address", () => {
    loginPage.enterResetEmail("invalid@email.com");
    loginPage.clickResetButton();
    loginPage.verifyDilaogOpened();
    loginPage.verifyDialogTitle();
    loginPage.clickOkButtonOnDialog();
  });

  it("SKT-T22: Verify reset password with valid email Address", () => {
    loginPage.enterResetEmail(fixtureData.resetEmail);
    loginPage.clickResetButton();
    loginPage.verifyDilaogOpened();
    loginPage.verifyDialogSuccessTitle();
    loginPage.clickOkButtonOnDialog();
  });

  it("SKT-T23: Verify 'back to signup' link from right card on Reset Password Page", () => {
    loginPage.clickBackToSignUpLink();
    regPage.verifyRegisterFields("firstName");
    regPage.verifyRegisterFields("lastName");
    regPage.verifyBackToLoginLink();
  });

  it("SKT-T24: Verify 'back to signin' button should be clickable.", () => {
    loginPage.clickForgetPasswordLink();
    loginPage.verifyBackTOSignInBtn();
    loginPage.clickBackToSIgnInBtn();
    loginPage.verifyResetPasswordLink();
  });

  it("SKT-T24: Verify 'back to signin' button should be clickable.", () => {
    loginPage.clickForgetPasswordLink();
    loginPage.verifyBackTOSignInBtn();
    loginPage.clickBackToSIgnInBtn();
    loginPage.verifyResetPasswordLink();
  });

  it("SKT-T25: Verify Successful Login", () => {
    loginPage.enterEmail(fixtureData.email);
    loginPage.enterPassword(fixtureData.password);
    loginPage.clickOnCheckBox();
    loginPage.clickLoginButton();
    loginPage.verifySuccessfullLogin();
  });
});
