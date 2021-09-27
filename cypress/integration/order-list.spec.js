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
    cy.wait(4000);
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

  it("SKT-T30: Verify functionality of batch logo.", () => {
    ordrPage.verifyClicklogo();
    ordrPage.verifyReportPageTitle();
  });

  it("SKT-T31: verify functionality of dashbaord icon..", () => {
    ordrPage.clickskipTraceMenu();
    ordrPage.verifySkipTraceHeader();
  });

  it("SKT-T32: Verify functionality of plus (+) icon", () => {
    ordrPage.clickWalletAddIcon();
    ordrPage.verifyBalancePopup();
  });

  it("SKT-T35: Verify elements for add amount in wallet on recharge balance popup", () => {
    ordrPage.verifyBalancePopup();
    ordrPage.verifyWalletElements();
  });

  it("SKT-T36: Verify user is able to add amount in wallet.", () => {
    ordrPage.getWalletAmount();
    ordrPage.verifyAddWalletAmount(10);
    ordrPage.verifySuccessMessage();
    ordrPage.verifyAmountAdded();
  });

  it("SKT-T37: Verify functionality of notification button", () => {
    ordrPage.verifyNotificationHover();
    ordrPage.verifyNotiCardOnHover();
  });

  it("SKT-T39: Verify elements of profile icon", () => {
    ordrPage.clickProfileIcon();
    ordrPage.verifyUserMenuOptions([
      "What's New",
      "Profile",
      "Billing",
      "Settings",
      "LOG OUT",
    ]);
  });

  it("SKT-T41: Verify elements in header on order list page.", () => {
    ordrPage.verifyHeaderElements([
      "Total Orders",
      "Completed Orders",
      "Pending Orders",
      "Hits%",
      "Errors",
    ]);
    ordrPage.getTotalOrdNumbers();
    ordrPage.getCmpltOrdNumbers();
    ordrPage.getPendOrdNumbers();
    ordrPage.getHitNumbers();
    ordrPage.getErrOrdNumbers();
  });

  it("SKT-T42: Verify functionality of Total orders text", () => {
    ordrPage.clickSingleSkipTrace();
    ordrPage.enterAdressToSkipTrace(fixtureData.address);
    cy.wait(2000);
    ordrPage.clickSkipTraceNowBtn();
    ordrPage.verifyskipPayPage();
    ordrPage.enterListName(fixtureData.listname + " " + randNum.toString());
    ordrPage.clickSkipPayNowBtn();
    ordrPage.verifySkipTraceSuccessMsg();
    ordrPage.verifyOrderCount();
    cy.wait(1000);
    ordrPage.getTotalOrdNumbers();
    ordrPage.clickSingleSkipTrace();
    ordrPage.enterAdressToSkipTrace(fixtureData.address);
    cy.wait(2000);
    ordrPage.clickSkipTraceNowBtn();
    ordrPage.verifyskipPayPage();
    ordrPage.enterListName(fixtureData.listname + " " + randNum.toString());
    cy.reload();
    ordrPage.verifyOrderCount();
  });

  it("SKT-T43: Verify functionality of Completed order.", () => {
    cy.reload();
    cy.wait(2000);
    ordrPage.getCmpltOrdNumbers();
    ordrPage.clickSingleSkipTrace();
    ordrPage.enterAdressToSkipTrace(fixtureData.address);
    ordrPage.clickSkipTraceNowBtn();
    ordrPage.verifyskipPayPage();
    ordrPage.enterListName(fixtureData.listname + " " + randNum.toString());
    ordrPage.clickSkipPayNowBtn();
    ordrPage.verifySkipTraceSuccessMsg();
    ordrPage.verifyCompltdOrderCount();
  });

  it("SKT-T45: Verify functionality of hits %", () => {
    cy.reload();
    cy.wait(2000);
    ordrPage.selectCompletedStatus();
    cy.wait(1000);
    ordrPage.getCountAndHitsAddTest();
    ordrPage.verifyHitsPercent();
  });

  it("SKT-T47: Verify filters in header on order list page.", () => {
    ordrPage.verifyDaysFilter(["7 days", "30 days", "90 days", "All Time"]);
  });

  it("SKT-T48: Verify functionality of '7 days' filters in order list page.", () => {
    ordrPage.clickDaysFilter("7 days");
    cy.wait(2000);
    ordrPage.verifyDaysSelected("7 days");
    ordrPage.getFilterDate();
    ordrPage.comparisonSelectedDaysFilterOrder(7);
  });
});
