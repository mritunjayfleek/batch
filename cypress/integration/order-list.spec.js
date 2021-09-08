import OrderList from "../support/pages/OrderList";
import Login from "../support/pages/Login";

let fixtureData;
let randNum = Math.floor(Math.random() * 1000);
let randNumber = Math.floor(Math.random() * 20);
const ordrPage = new OrderList();
const login = new Login();

describe("Validate order list page", () => {
  before(() => {
    cy.fixture("constants").then((data) => (fixtureData = data));
  });

  after(() => {
    cy.Logout();
  });

  it("SKT-T26: Verify Successful Login", () => {
    cy.visit("/");
    cy.Login(fixtureData.email, fixtureData.password);
    cy.wait(8000);
    login.verifySuccessfullLogin();
  });

  it("SKT-T27: Verify buttons in left menu bar", () => {
    ordrPage.verifySkipTraceMenu();
    ordrPage.verifyDashBoardMenu();
    ordrPage.verifyAffiliatesMenu();
  });

  it("SKT-T28: Verify user lands on skip-trace list page on click of skip trace button from left menu.", () => {
    ordrPage.clickskipTraceMenu();
    ordrPage.verifySkipTraceHeader();
  });

  it("SKT-T29: Verify elements in global header.", () => {
    ordrPage.verifyBatchLogo();
    ordrPage.VerifyDashboardicon();
    ordrPage.verifySkipTraceHeader();
    ordrPage.verifyBalanceAddicon();
    ordrPage.verifyNotification();
    ordrPage.verifyHelpButton();
    ordrPage.verifyUserMenu();
  });
});
