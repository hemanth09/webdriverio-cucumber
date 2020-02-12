import Page from './page';
import pause from '../support/actions/pause';
import waitForVisible from '../support/actions/waitForVisible';
import waitUntil from '../support/actions/waitUntil';

class MortgagePage extends Page {
    /**
    * define elements
    */
    get mortgage() { return $("[data-di-id='di-id-e8267c30-3936b64a']"); }

    get firstTimeBuyers() { return $("[data-di-id='di-id-39506c08-d37633eb']"); }

    get ourMortgageRates() { return $("[data-di-id='di-id-2389c534-d514f9c3']"); }

    get selectorHaveNationwideMortgageNo() { return $("[data-di-id='#selectorItemHaveNationwideMortgage1']"); }

    get selectorNationwideMortgageTypeChangingLender() { return $("//*[@id='selectorItemNationwideMortgageTypeNo2']"); }

    get searchPropertyValue() { return $("[data-di-id='#SearchPropertyValue']"); }

    get searchMortgageAmount() { return $("[data-di-id='#SearchMortgageAmount']"); }

    get searchMortgageTerm() { return $("[data-di-id='#SearchMortgageTerm']"); }

    get findAMortgageRateBtn() { return $("[data-di-id='#myButton']"); }

    get resultsList() { return $('.results.mortgageRatesResultsNew'); }

    /**
     * define or overwrite page methods
     */

    open(url) {
        super.open(url);
        pause(1000);
    }

    verifyPageTitle(pageTitle) {
        browser.getTitle().should.equal(pageTitle);
    }

    clickMortgageBtn() {
        this.mortgage.click();
        pause(2000);
    }

    clickFirstTimeBuyersBtn() {
        this.firstTimeBuyers.click();
        pause(2000);
    }

    clickOurMortgageRatesBtn() {
        const scopeThis = this;
        waitUntil(scopeThis.ourMortgageRates.click(), 1000);
    }

    clickHaveNationwideMortgageNoBtn() {
        const scopeThis = this;
        waitForVisible(scopeThis.selectorHaveNationwideMortgageNo, 2000);
        waitUntil(scopeThis.selectorHaveNationwideMortgageNo.click(), 1000);
        pause(1000);
    }

    clickNationwideMortgageTypeChangingLenderBtn() {
        const scopeThis = this;
        waitForVisible(scopeThis.selectorNationwideMortgageTypeChangingLender, 2000);
        waitUntil(scopeThis.selectorNationwideMortgageTypeChangingLender.click(), 1000);
        pause(1000);
    }

    setSearchPropertyValue(value) {
        const scopeThis = this;
        waitForVisible(scopeThis.searchPropertyValue, 2000);
        waitUntil(scopeThis.searchPropertyValue.setValue(value), 1000);
    }

    setSearchMortgageAmount(amount) {
        const scopeThis = this;
        waitForVisible(scopeThis.searchMortgageAmount, 2000);
        waitUntil(scopeThis.searchMortgageAmount.setValue(amount), 1000);
    }

    setSearchMortgageTerm(term) {
        const scopeThis = this;
        waitUntil(scopeThis.searchMortgageTerm.setValue(term), 2000);
    }

    clickFindAMortgageRatesButton() {
        const scopeThis = this;
        waitUntil(scopeThis.findAMortgageRateBtn.click(), 5000);
    }

    isSearched() {
        waitForVisible(this.resultsList, 5000);
        return this.resultsList.isVisible();
    }
}

export default new MortgagePage();
