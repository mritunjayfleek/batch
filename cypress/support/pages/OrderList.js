import "cypress-xpath";

const emailname = "[placeholder=Email]";
const loginpasswrd = "[placeholder=Password]";
const checkbox = "[class=checkmark]";
const loginbtn = "[type=submit]";
const username = ".user-dropdwn  a.dropdown-toggle";
const logout = ".log-out";
const skipTraceMenu = "[title='Skip Trace'] img";
const reportsMenu = "[title='Reports'] img";
const affiliatesMenu = "[title='Affiliates'] img";
// const header = "//ol[@class='breadcrumb']//li[2]/a";
const skiptraceHeader =
  '//li[contains(@class,"breadcrumb-item")]/a[contains(text(),"Skip Trace List")]';
const reportHeader =
  '//li[contains(@class,"breadcrumb-item")]/a[contains(text(),"Reports")]';
const logo = "a.navbar-brand";
const dashicon = ".breadcrumb-item a img";
const addblnc = ".add-blnc a";

const notificationIcon = "li.notifi";
const helpicon = "li.help-menu";
const userMenuDrpdwn = "li.user-dropdwn";
const rechargetitle = "h5.modal-title";
const currentamount = "[for='useCurrentBalance']";
const cardname = "img.user-name + input";
const cardnumber = "[name='cardnumber']";
const agree_fordebit = "#customCheckCard";
const savepayment =
  '//div[@class="modal-content"]//button[contains(text(),"SAVE")]';
const topupInputField = "[formcontrolname=topupAmount]";
const termagree = "[for=customCheckWalletTerms]";
const walletnotrefundtext = "#walletBalanceNotRefundable + span";
const paybtn = "[type=submit]";
const expiredate = "[name=exp-date]";
const cvcnum = "[name=cvc]";
const postal = "[name=postal]";
const toastMessage = "div.toast-success";
const rechargeSuccess = 'div[aria-label="Recharge successful"]';
const walletBal =
  '//li[contains(@class,"add-blnc")]//span[contains(text(),"$")]';
const crossbtn = "button.close";
const termcheckbox = "#customCheckWalletTerms + span";
const amountsuccessmsg = "[id=toast-container]";
const notifihoverbox = "div.notifi-drop.show";
const profileicon = "span.profile-pic";
const totalordernum =
  "//div[@class='equity-box']//div//div[1]//div[1]//div[1]//div[1]";
const compltordernum =
  "//div[@class='equity-box']//div//div[1]//div[1]//div[2]";
const pendingnum = "//div[@class='equity-box']//div//div[1]//div[1]//div[3]";
const hitpercent = "//div[@class='equity-box']//div//div[1]//div[1]//div[4]";
const errornum = "//div[@class='equity-box']//div//div[1]//div[1]//div[5]";
const filterordernum = "div.days-box";
const singleskip = 'button img[src*="single-skip"]';
const inputSingleSkipAdd = 'input[placeholder*="Property Address"]';
const skiptracebtn = "[btnclass=btn-img] button";
const listtext = "[name =listName]";
const paynowbtn =
  "//form[contains(@class,'needs-validation')]/following-sibling::div//button[contains(@class,'bst-blue-btn')]";
const singleskip_successmsg = "[role=alertdialog]";
const sevendays =
  "div.days-box app-bst-button:nth-of-type(1) button:nth-of-type(1)";
const walletModal = "div.modal-content";
const headerItem = (header) =>
  `//div[contains(@class,"smsent-box")]/p[text()="${header}"]`;
const headerNumbers = (headNum) =>
  `//div[contains(@class,"smsent-box")]/p[text()="${headNum}"]/preceding-sibling::h4`;

const totalOrdNum =
  '//div[contains(@class,"smsent-box")]/p[text()="Total Orders"]/preceding-sibling::h4';
const cmpltdOrdNum =
  '//div[contains(@class,"smsent-box")]/p[text()="Completed Orders"]/preceding-sibling::h4';
const pendOrdNum =
  '//div[contains(@class,"smsent-box")]/p[text()="Pending Orders"]/preceding-sibling::h4';
const hitsPercent =
  '//div[contains(@class,"smsent-box")]/p[text()="Hits%"]/preceding-sibling::h4';
const errorsNum =
  '//div[contains(@class,"smsent-box")]/p[text()="Errors"]/preceding-sibling::h4';

export default class OrderList {
  visit() {
    cy.visit("https://dev.batchskiptracing.com");
    cy.title().should("eq", "Skip Tracing");
  }
  verifybatchtext() {
    let text;
    text = cy.get("div>h4").then((el) => {
      cy.log(el.text());
      // expect(text).to.equal('Welcome back')
    });
  }

  enterEmail(email) {
    cy.get(emailname).clear().type(email);
  }

  enterPass(passwrd) {
    cy.get(loginpasswrd).clear().type(passwrd);
  }
  selectcheckbox() {
    cy.get(checkbox).click();
  }

  Loginbtn() {
    let text;
    text = cy
      .get(loginbtn)
      .click()
      .then((el) => {
        el.text();
      });
  }

  // verifyDashboardPage_Profile(name) {
  //   let text;
  //   text = cy.get(username).then((el) => {
  //     const txt = el.text();
  //     cy.log(txt);
  //     expect(txt).to.equal(name);
  //   });
  // }

  Logout() {
    cy.get(username).should("be.visible").click();
    let text;
    text = cy.get(logout).then((el) => {
      const txt = el.text();
      cy.log(txt);
    });
    cy.get(logout).click();
  }

  // VerifyMenuIcons() {
  //   cy.get(menuicon1).should("be.visible");
  //   cy.get(menuicon2).should("be.visible");
  //   cy.get(menuicon3).should("be.visible").click();
  // }

  verifySkipTraceMenu() {
    cy.get(skipTraceMenu).should("be.visible");
  }

  verifyDashBoardMenu() {
    cy.get(reportsMenu).should("be.visible");
  }

  verifyAffiliatesMenu() {
    cy.get(affiliatesMenu).should("be.visible").click();
  }

  clickskipTraceMenu() {
    cy.get(skipTraceMenu).should("be.visible").click();
  }

  verifySkipTraceHeader() {
    cy.xpath(skiptraceHeader, { timeout: 4000 }).should("be.visible");
  }

  VerifyDashboardicon() {
    cy.get(dashicon).should("be.visible");
  }

  verifyBatchLogo() {
    cy.get(logo).should("be.visible");
  }

  verifyBalanceAddicon() {
    cy.get(addblnc).should("be.visible");
  }

  verifyHelpButton() {
    cy.get(helpicon).should("be.visible");
  }

  verifyUserMenu() {
    cy.get(userMenuDrpdwn).should("be.visible");
  }

  verifyNotification() {
    cy.get(notificationIcon).should("be.visible");
  }

  verifyClicklogo() {
    cy.get(logo).click();
  }

  verifyReportPageTitle() {
    cy.xpath(reportHeader, { timeout: 4000 }).should("be.visible");
  }

  // verify_addicon() {
  //   cy.get(addblnc).click();
  //   let text = cy.get(rechargetitle).then((el) => {
  //     const txt = el.text();
  //     cy.log(txt);
  //     expect(txt).to.equal("RECHARGE BALANCE ");
  //   });
  // }

  clickWalletAddIcon() {
    cy.get(addblnc).click();
  }

  verifyBalancePopup() {
    cy.get(rechargetitle).should("contain.text", "RECHARGE BALANCE");
  }

  verifyCurrentamount() {
    cy.get(topupInputField).should("be.visible");
    cy.get(termagree).should("be.visible");
    let text = cy.get(currentamount).then((el) => {
      const txt = el.text();
      cy.log(txt);
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        expect(txt).is.include(data.amountcurrent);
      });
    });
    cy.get(crossbtn).click();
  }

  // verify_wallettext_paybtn() {
  //   cy.get(paybtn).should("be.disabled");
  //   let text = cy.get(walletnotrefundtext).then((el) => {
  //     const txt = el.text();
  //     cy.log(txt);
  //     expect(txt).to.equal(" WALLET BALANCE IS NOT REFUNDABLE ");
  //   });
  // }

  enterAmountToAdd() {
    cy.get(topupInputField).clear().type(amount);
  }

  selectNotRfndableChkbox() {
    cy.get(walletnotrefundtext).click();
  }

  selectTermsServiceChkbox() {
    cy.get(termcheckbox).click();
  }

  clickPayNowBtn() {
    cy.get(paybtn).should("be.enabled").click();
  }

  // verifyAddWalletAmount(amount) {
  //   cy.get("div.modal-content").then((amounToAdd) => {
  //     if (amounToAdd.find(topupInputField).length > 0) {
  //       cy.get(topupInputField).clear().type(amount);
  //       cy.get(termcheckbox).click();
  //       cy.get(walletnotrefundtext).click();
  //       cy.get(paybtn).should("be.enabled").click();
  //     } else {
  //       cy.get(cardname).type("Test");
  //       cy.get('iframe[title="Secure card payment input frame"]')
  //         .its("0.contentDocument.body")
  //         .should("not.be.empty")
  //         .then((body) => {
  //           cy.wrap(body).find(cardnumber).type("4000056655665556");
  //           cy.wrap(body).find(expiredate).type("1124", { force: true });
  //           cy.wrap(body).find(cvcnum).type("123", { force: true });
  //           cy.wrap(body).find(postal).type("12345", { force: true });
  //         });
  //       cy.get(agree_fordebit).click({ force: true });
  //       cy.xpath(savepayment).should("be.enabled").click();
  //       cy.wait(2000);
  //     }
  //   });
  // }

  verifyAddWalletAmount(amount) {
    cy.get("div.modal-content").then((amounToAdd) => {
      if (amounToAdd.find(topupInputField).length > 0) {
        cy.get(topupInputField).clear().type(amount);
        cy.get(termcheckbox).click();
        cy.get(walletnotrefundtext).click();
        cy.get(paybtn).should("be.enabled").click();
      } else {
        cy.get(cardname).type("Test");
        cy.get('iframe[title="Secure card payment input frame"]')
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then((body) => {
            cy.wrap(body).find(cardnumber).type("4000056655665556");
            cy.wrap(body).find(expiredate).type("1124", { force: true });
            cy.wrap(body).find(cvcnum).type("123", { force: true });
            cy.wrap(body).find(postal).type("12345", { force: true });
          });
        cy.get(agree_fordebit).click({ force: true });
        cy.xpath(savepayment).should("be.enabled").click();
        cy.wait(2000);
      }
    });
  }

  verifyWalletElements() {
    cy.get("div.modal-content").then((amounToAdd) => {
      if (amounToAdd.find(topupInputField).length > 0) {
        cy.get(walletModal).should("be.visible");
        cy.get(topupInputField).should("be.visible");
        cy.get(walletnotrefundtext).should("be.visible");
        cy.get(termcheckbox).should("be.visible");
        cy.get(paybtn).should("be.visible");
      } else {
        cy.get(cardname).type("Test");
        cy.get('iframe[title="Secure card payment input frame"]')
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then((body) => {
            cy.wrap(body).find(cardnumber).type("4000056655665556");
            cy.wrap(body).find(expiredate).type("1124", { force: true });
            cy.wrap(body).find(cvcnum).type("123", { force: true });
            cy.wrap(body).find(postal).type("12345", { force: true });
          });
        cy.get(agree_fordebit).click({ force: true });
        cy.xpath(savepayment).should("be.enabled").click();
        cy.wait(2000);
        cy.get(walletModal).should("be.visible");
        cy.get(topupInputField).should("be.visible");
        cy.get(walletnotrefundtext).should("be.visible");
        cy.get(termcheckbox).should("be.visible");
        cy.get(paybtn).should("be.visible");
      }
    });
  }

  verifySuccessMessage() {
    cy.get(toastMessage, { timeout: 10000 }).should("be.visible");
    cy.get(rechargeSuccess, { timeout: 5000 }).should("be.visible");
    // cy.get(crossbtn, { timeout: 4000 }).click();
    cy.reload();
    cy.wait(10000);
  }

  getWalletAmount() {
    cy.xpath(walletBal).then((bal) => {
      const wallBal = bal.text();
      cy.log(wallBal);
      expect(wallBal).not.to.be.null;
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.getWalletAmount = wallBal;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  verifyAmountAdded() {
    cy.xpath(walletBal).then((added) => {
      const getAddedAmt = added.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        expect(getAddedAmt).not.to.equal(data.getWalletAmount);
      });
    });
  }

  verifyNotificationHover() {
    cy.get(notificationIcon).trigger("mouseover");
  }

  verifyNotiCardOnHover() {
    cy.get(notifihoverbox).should("be.visible");
  }

  clickProfileIcon() {
    cy.get(profileicon).click();
  }

  verifyUserMenuOptions(options) {
    for (let i = 0; i < options.length; i++) {
      cy.xpath(
        '//div[@class="dropdown-menu show"]/a[contains(text(), "' +
          options[i] +
          '")]'
      ).should("be.visible");
    }
  }

  verifyHeaderElements(headers) {
    for (let i = 0; i < headers.length; i++) {
      cy.xpath(headerItem(headers[i])).should("be.visible");
    }
  }

  getTotalOrdNumbers() {
    cy.xpath(totalOrdNum).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.TotalOrders = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  getCmpltOrdNumbers() {
    cy.xpath(cmpltdOrdNum).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.TotalOrders = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  getPendOrdNumbers() {
    cy.xpath(pendOrdNum).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.TotalOrders = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  getHitNumbers() {
    cy.xpath(hitsPercent).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.TotalOrders = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  getErrOrdNumbers() {
    cy.xpath(errorsNum).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.TotalOrders = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  verify_orderlistelements() {
    cy.get(skipTraceMenu).click();
    let text = cy.xpath(totalordernum).then((el) => {
      const txt = el.text().trim();
      cy.log(txt);
      expect(txt).to.include("Total Orders");
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.orderlistcount = txt.split("T")[0];
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }
  verify_ordercomplt() {
    let text = cy.xpath(compltordernum).then((el) => {
      const txt = el.text().trim();
      cy.log(txt);
      expect(txt).to.include("Completed Orders");
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.compltlistcount = txt.split("C")[0];
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }
  verify_Pending() {
    let text = cy.xpath(pendingnum).then((el) => {
      const txt = el.text().trim();
      cy.log(txt);
      expect(txt).to.include("Pending Orders");
    });
  }
  Verify_Hit_Order() {
    let text = cy.xpath(hitpercent).then((el) => {
      const txt = el.text().trim();
      cy.log(txt);
      expect(txt).to.include("Hits%");
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.HitPercent = txt.split("H")[0];
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }
  Verify_Error_filter() {
    let text = cy.xpath(errornum).then((el) => {
      const txt = el.text().trim();
      cy.log(txt);
      expect(txt).to.include("Errors");
    });
    cy.get(filterordernum).should("be.visible");
  }

  // createSkipTrace(address) {
  //   cy.get(singleskip).should("be.visible").click();
  //   cy.get(singleskiptextbox)
  //     .click()
  //     .type(address)
  //     .wait(2000)
  //     .type("{downarrow}")
  //     .type("{enter}");
  // }

  // verify_ordercount() {
  //   let text = cy.xpath(totalordernum).then((el) => {
  //     const txt = el.text();
  //     cy.log(txt);
  //     cy.readFile("cypress/fixtures/constants.json").then((data) => {
  //       expect(txt).to.include(parseInt(data.orderlistcount) + 1);
  //     });
  //   });
  // }
  // PayNow_Skiptrace(listname) {
  //   cy.wait(1000);
  //   cy.get(skiptracebtn).should("be.enabled").click();
  //   cy.get(listtext).type(listname);
  //   cy.xpath(paynowbtn).should("be.enabled").click();
  //   cy.wait(4000);
  //   let text = cy
  //     .get(singleskip_successmsg, { timout: 10000 })
  //     .should("be.visible")
  //     .then((el) => {
  //       const txt = el.text().trim();
  //       cy.log(txt);
  //       expect(txt).is.include("successful");
  //     });
  // }

  clickSingleSkipTraceNow() {
    cy.get(singleskip).should("be.enabled").click();
  }

  enterAdressToSkipTrace(address) {
    cy.get(inputSingleSkipAdd).type(address);
  }

  verify_CompltOrdercount() {
    cy.reload({ timeout: 15000 });
    cy.wait(5000);
    let text = cy.xpath(compltordernum).then((el) => {
      const txt = el.text();
      cy.log(txt);
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        expect(txt).to.include(parseInt(data.compltlistcount) + 1);
      });
    });
  }

  page_reload() {
    cy.reload();
    cy.wait(3000);
  }

  verify_Hitpercentcount() {
    cy.get("table.bst-table tbody").then(($table) => {
      const text = $table.find(".matchPercent").first().text();
      cy.log(text);
      if (text.includes("100%")) {
        cy.log("Yes");
        let text = cy.xpath(hitpercent).then((el) => {
          const txt = el.text();
          cy.log(txt);
          cy.readFile("cypress/fixtures/constants.json").then((data) => {
            expect(txt).is.include(parseInt(parseFloat(data.HitPercent) + 0.7));
          });
        });
      } else {
        cy.log("No");
        let text = cy.xpath(hitpercent).then((el) => {
          const txt = el.text();
          cy.log(txt);
          cy.readFile("cypress/fixtures/constants.json").then((data) => {
            expect(txt).is.include(
              parseInt(parseFloat(data.HitPercent) - 0.75)
            );
          });
        });
      }
    });
  }
  verify_Dayfilter() {
    cy.get(filterordernum).should("be.visible");
  }
}
