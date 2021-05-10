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
    loginPage.verifyEmailPasswordField("password");
    loginPage.verifyTermsOfServicesError();
  });

  it("SKT-T11: Verify validation on Email", () => {
    loginPage.enterEmail("invalid");
    loginPage.enterPassword(fixtureData.password);
    loginPage.clickOnCheckBox();
    loginPage.clickLoginButton();
    loginPage.verifyInvalidEmail("userId");
  });
});
