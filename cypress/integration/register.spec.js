import Register from "../support/pages/Register";
let fixtureData;
let randNum = Math.floor(Math.random() * 1000);

describe("Failed Register with Empty Fields", () => {
  before(() => {
    // To add random number in constants.json
    cy.readFile("cypress/fixtures/constants.json", (err, data) => {
      if (err) {
        return console.error(err);
      }
    }).then((data) => {
      data.randNum = randNum;
      cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
    });

    cy.fixture("constants")
      .then((data) => (fixtureData = data))
      .then(() => {
        cy.visit("/", { failOnStatusCode: false });
      });
  });

  it("SKT-T1: Verify all elements on Register page", () => {
    const regpage = new Register();
    regpage.clickSignUpNowButton();
    regpage.verifyRegisterFields("firstName");
    regpage.verifyRegisterFields("lastName");
    regpage.verifyRegisterFields("email");
    regpage.verifyRegisterFields("companyName");
    regpage.verifyRegisterFields("mobileNumber");
    regpage.verifyRegisterFields("password");
    regpage.verifyRegisterFields("confirmPassword");
    regpage.verifyBackToLoginLink();
    regpage.verifyRegisterButton();
  });

  it("SKT-T2: Verify Required Fields", () => {
    const regpage = new Register();
    cy.reload();
    regpage.clickRegisterButton();
    regpage.verifyRequiredField("firstName");
    regpage.verifyRequiredField("lastName");
    regpage.verifyRequiredField("email");
    regpage.verifyMobileInputFieldError("mobileNumber");
    regpage.verifyRequiredField("password");
    regpage.verifyRequiredField("confirmPassword");
  });

  it("SKT-T3: Verify validation on First name and Last name", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName("1234");
    regpage.enterLastName("5678");
    regpage.enterEmail(fixtureData.email);
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber(fixtureData.MobileNumber);
    regpage.enterPassword(fixtureData.password);
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyValidationOnFirstLastField("firstName");
    regpage.verifyValidationOnFirstLastField("lastName");
  });

  it("SKT-T4: Verify validation on Phone Number", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName(fixtureData.firstName);
    regpage.enterLastName(fixtureData.lastName);
    regpage.enterEmail(fixtureData.email);
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber("9999");
    regpage.enterPassword(fixtureData.password);
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyMobileValidation("mobileNumber");
  });

  it("SKT-T5: Verify validation on email address", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName(fixtureData.firstName);
    regpage.enterLastName(fixtureData.lastName);
    regpage.enterEmail("invalid");
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber(fixtureData.MobileNumber);
    regpage.enterPassword(fixtureData.password);
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyEmailValidation("email");
  });

  it("SKT-T103: Verify user should not be registered with empty first name.", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName(" ");
    regpage.enterLastName(fixtureData.lastName);
    regpage.enterEmail(fixtureData.email);
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber(fixtureData.MobileNumber);
    regpage.enterPassword(fixtureData.password);
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyMandatoryFieldError("firstName");
  });

  it("SKT-T104: Verify user should not be registered with empty last name.", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName(fixtureData.firstName);
    regpage.enterLastName(" ");
    regpage.enterEmail(fixtureData.email);
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber(fixtureData.MobileNumber);
    regpage.enterPassword(fixtureData.password);
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyMandatoryFieldError("lastName");
  });

  it("SKT-T105: Verify user should not be registered with empty email field.", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName(fixtureData.firstName);
    regpage.enterLastName(fixtureData.lastName);
    regpage.enterEmail(" ");
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber(fixtureData.MobileNumber);
    regpage.enterPassword(fixtureData.password);
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyMandatoryFieldError("email");
  });

  it("SKT-T106: Verify user should not be registered with empty phone number.", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName(fixtureData.firstName);
    regpage.enterLastName(fixtureData.lastName);
    regpage.enterEmail(fixtureData.email);
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber(" ");
    regpage.enterPassword(fixtureData.password);
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyMobileInputFieldError("mobileNumber");
  });

  it("SKT-T107: Verify user should not be registered with empty password and confirm password", () => {
    const regpage = new Register();
    cy.reload();
    regpage.enterFirstName(fixtureData.firstName);
    regpage.enterLastName(fixtureData.lastName);
    regpage.enterEmail(fixtureData.email);
    regpage.enterCompanyName(fixtureData.companyName);
    regpage.enterMobileNumber(fixtureData.MobileNumber);
    regpage.enterPassword(" ");
    regpage.enterConfirmPassword(fixtureData.confirmPassword);
    regpage.clickRegisterButton();
    regpage.verifyMandatoryFieldError("password");
    regpage.enterPassword(fixtureData.password);
    regpage.clearForgetPassword();
    regpage.clickRegisterButton();
    regpage.verifyMandatoryFieldError("confirmPassword");
  });

  it("SKT-T6: Verify 'back to login' should be clickable.", () => {
    const regpage = new Register();
    cy.reload();
    regpage.clickBackToLoginLink();
    regpage.verifyLoginButton();
  });

  it("SKT-T8: Verify Successful Register", () => {
    const regpage = new Register();
    regpage.clickSignUpNowButton();
    regpage.enterFirstName(fixtureData.firstName);
    regpage.enterLastName(fixtureData.lastName);
    regpage.enterEmail(
      String(fixtureData.email).replace("-user", "-user" + String(randNum))
    );
  });
});
