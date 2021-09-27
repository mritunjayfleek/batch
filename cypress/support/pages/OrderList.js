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
const filterordernum = "div.days-box";
const singleskip = 'button img[src*="single-skip"]';
const bulkSKip = '.btnbox button img[src*="bulk-skip"]';
const inputSingleSkipAdd = '.search-box input[placeholder*="Property Address"]';
const skiptracebtn = ".container [btnclass=btn-img] button";
const listtext = "[name =listName]";
const paynowbtn =
  '//div[@id="payment-form"]//button[contains(text(),"PAY NOW")]';
const singlePaymentForm = "div#payment-form";
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
const successAlertSkiptrace =
  '//div[@id="toast-container"]//div[contains(text(),"processed successfully")]';
const daysFilter = (days) =>
  `//div[contains(@class,"days-box")]//button[contains(text(),"${days}")]`;
const matchPerTotal = "td.matchPercent span span";
const nextBtnNotDisabled = "#bst-table_next:not(.disabled)";
const paginateNumb =
  ".paginate_button:not(.first):not(.last):not(.previous):not(.next)";

const selectStatus = 'select[formcontrolname="status"]';
const selectedDaysFilter = (selDays) =>
  `//div[contains(@class,"days-box")]//button[not(contains(@class,"white-btn"))][contains(text(),"${selDays}")]`;
const dateAdded = "td.dateModified span span";
const singleTraceModal = "app-single-skip-trace-modal .modal-body";
const searchIcononModal = ".property-search button";
const skipTraceTitle = "h5.modal-title";
const addressSuggestion = 'div.pac-container:not([style*="none"])';
const searchIcon = ".property-search";
const addressSubTitle = (address) =>
  `//div[@id="payment-form"]//div[contains(text(),"${address}")]`;
const listNameInput = 'div#payment-form input[name="listName"]';
const perMatch = "span.per-match-count span";
const totalCost = ".total-cost-text+.total-cost";
const couponField = '.payment-coupon-code input[formcontrolname="couponCode"]';
const cancelbtn =
  '//div[@id="payment-form"]//button[contains(text(),"CANCEL")]';
const walletCheckbox = "#payment-form #chkUseCurrentBalance";

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
        data.CompletedOrders = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  getPendOrdNumbers() {
    cy.xpath(pendOrdNum).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.PendingOrders = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  getHitNumbers() {
    cy.xpath(hitsPercent).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.HitsPercent = ordNum;
        cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
      });
    });
  }

  getErrOrdNumbers() {
    cy.xpath(errorsNum).then((numbers) => {
      const ordNum = numbers.text();
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        data.ErrorNumber = ordNum;
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

  clickSingleSkipTrace() {
    cy.get(singleskip, { timeout: 6000 }).click();
  }

  enterAdressToSkipTrace(address) {
    cy.get(inputSingleSkipAdd)
      .type(address)
      .wait(500)
      .type("{downarrow}")
      .type("{enter}");
  }

  clickSkipTraceNowBtn() {
    cy.wait(2000);
    cy.get(skiptracebtn).click();
  }

  verifyskipPayPage() {
    cy.get(singlePaymentForm, { timeout: 4000 }).should("be.visible");
  }

  enterListName(traceName) {
    cy.get(listtext).type(traceName);
  }

  clickSkipPayNowBtn() {
    cy.wait(2000);
    cy.xpath(paynowbtn).click();
  }

  verifySkipTraceSuccessMsg() {
    cy.get(toastMessage, { timeout: 15000 }).should("be.visible");
    cy.xpath(successAlertSkiptrace, { timeout: 10000 }).should("be.visible");
  }

  verifyOrderCount() {
    cy.xpath(totalOrdNum).then((numbers) => {
      const orderNum = numbers.text();
      cy.log(orderNum);
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        expect(orderNum).to.include(parseInt(data.TotalOrders) + 1);
      });
    });
  }

  verifyCompltdOrderCount() {
    cy.xpath(cmpltdOrdNum).then((numbers) => {
      const cmpltdNum = numbers.text();
      cy.log(cmpltdNum);
      cy.readFile("cypress/fixtures/constants.json").then((data) => {
        expect(cmpltdNum).to.include(parseInt(data.CompletedOrders) + 1);
      });
    });
  }

  verifyDaysFilter(days) {
    for (let i = 0; i < days.length; i++) {
      cy.xpath(daysFilter(days[i])).should("be.visible");
    }
  }

  getCountAndHitsAdd() {
    let total = 0;
    cy.get(matchPerTotal).then((records) => {
      const val = records.length;
      for (let i = 0; i < records.length; i++) {
        const hitNum = records.text();
        total = total + parseInt(hitNum);
      }
    });
  }

  getCountAndHitsAddTest() {
    cy.get(paginateNumb) // last() will return last value from found result.
      .last()
      .then((num) => {
        const maxPaginate = parseInt(num.text());
        let sum = 0;
        let len = 0;
        for (let i = 0; i < maxPaginate; i++) {
          cy.get(matchPerTotal).then((records) => {
            len = len + records.length;
            for (let i = 0; i < records.length; i++) {
              const hitNum = records[i].textContent.trim().split("%");
              sum = sum + parseInt(hitNum[0]);
            }
            cy.readFile("cypress/fixtures/constants.json").then((data) => {
              data.TotalHitsSum = sum;
              data.TotalHitsCount = len;
              cy.writeFile(
                "cypress/fixtures/constants.json",
                JSON.stringify(data)
              );
            });
            cy.log("******" + sum + "     " + len + "********");
          });
          cy.get("body").then((body) => {
            if (body.find(nextBtnNotDisabled).length) {
              cy.get(nextBtnNotDisabled).click({ force: true });
            }
          });
        }
      });
  }

  verifyHitsPercent() {
    cy.readFile("cypress/fixtures/constants.json").then((data) => {
      const hitRslt = data.TotalHitsSum / data.TotalHitsCount;
      cy.xpath(hitsPercent).should("contain.text", hitRslt);
    });
  }

  selectCompletedStatus() {
    cy.get(selectStatus).select("1: complete");
  }

  clickDaysFilter(days) {
    cy.xpath(daysFilter(days)).click();
  }

  verifyDaysSelected(days) {
    cy.xpath(selectedDaysFilter(days)).should("be.visible");
  }

  getFilterDate() {
    cy.get(paginateNumb).last().click(); // last() will return last value from found result.
    cy.wait(3000);
    cy.get(dateAdded)
      .last()
      .then((date) => {
        const dateTxt = date.text().trim();
        cy.readFile("cypress/fixtures/constants.json").then((data) => {
          data.OrderAddedDate = dateTxt;
          cy.writeFile("cypress/fixtures/constants.json", JSON.stringify(data));
        });
      });
  }

  comparisonSelectedDaysFilterOrder(filterDays) {
    let flag = false;
    let date = new Date();
    date.setDate(date.getDate() - filterDays);
    let minusSelectedFilterDays =
      String(date.getMonth() + 1) +
      "/" +
      String(date.getDate()) +
      "/" +
      String(date.getFullYear()).substr(-2);
    cy.log(minusSelectedFilterDays);

    cy.readFile("cypress/fixtures/constants.json").then((data) => {
      let dateAdded = data.OrderAddedDate;
      let addedDate = new Date(dateAdded);
      let addedDateActual =
        String(addedDate.getMonth() + 1) +
        "/" +
        String(addedDate.getDate()) +
        "/" +
        String(addedDate.getFullYear()).substr(-2);
      cy.log(addedDateActual);

      if (new Date(addedDateActual) >= new Date(minusSelectedFilterDays)) {
        // Added date(website date) should be either greater or equals.. it should not be greater than currentDate-7 date.
        flag = true;
        cy.log("IF RUN");
      } else {
        cy.log("ELSE RUN");
      }
      expect(flag).to.be.true;
    });
  }

  verifySingleSkipTrace() {
    cy.get(singleskip).should("be.visible");
  }

  verifyBulkSkipTrace() {
    cy.get(bulkSKip).should("be.visible");
  }

  verifySingleSkipModalOpen() {
    cy.get(singleTraceModal).should("be.visible");
  }

  verifySearchBoxForSingleTrace() {
    cy.get(inputSingleSkipAdd).should("be.visible");
  }

  verifySkipTraceTitleonPopup(skipTitle) {
    cy.get(skipTraceTitle).then((title) => {
      const getTitle = title.text().trim();
      expect(getTitle).to.contains(skipTitle);
    });
  }

  verifySearchIconOnSingleModal() {
    cy.get(searchIcononModal).should("be.visible");
  }

  verifySkipTraceNowBUtton() {
    cy.get(skiptracebtn).should("be.visible");
  }

  enterAddresses(address) {
    cy.get(inputSingleSkipAdd).type(address);
  }

  verifyAddressesSuggestions() {
    cy.get(addressSuggestion).should("be.visible");
  }

  selectFirstSuggestion() {
    cy.get(inputSingleSkipAdd).wait(1000).type("{downarrow}").type("{enter}");
  }

  clickSearchIcon() {
    cy.wait(2000);
    cy.get(searchIcon).click();
  }

  verifyAddressOnSkipPayPage(addrss) {
    cy.xpath(addressSubTitle(addrss)).should("be.visible");
  }

  verifyListNameInputField() {
    cy.get(listNameInput).should("be.visible");
  }

  verifyPerMatchCost(amt) {
    cy.get(perMatch).then((amount) => {
      const perMatchAmt = amount.text().trim();
      expect(perMatchAmt).to.contains(amt);
    });
  }

  verifyTotalCostOnSkipPage() {
    cy.get(totalCost).should("be.visible");
  }

  verifyCouponCodeField() {
    cy.get(couponField).should("be.visible");
  }

  verifyCheckBoxCheckedByDefault() {
    cy.get(walletCheckbox).should("be.checked");
  }

  verifyPayNowANDCancelBtn() {
    cy.xpath(paynowbtn).should("be.visible");
    cy.xpath(cancelbtn).should("be.visible");
  }
}
