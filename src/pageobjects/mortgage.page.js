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

    get selectorHaveNationwideMortgageNo() { return $("//*[@id='selectorItemHaveNationwideMortgage1']"); }

    get selectorNationwideMortgageTypeChangingLender() { return $("//*[@id='selectorItemNationwideMortgageTypeNo2']"); }

    get searchPropertyValue() { return $("[data-di-id='#SearchPropertyValue']"); }

    get searchDepositAmount() { return $("[data-di-id='#SearchDepositAmount']"); }

    get searchMortgageTerm() { return $("[data-di-id='#SearchMortgageTerm']"); }

    get findAMortgageRateBtn() { return $("[data-di-id='#myButton']"); }

    get resultsList() { return $('.results.mortgageRatesResultsNew'); }

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('https://www.nationwide.co.uk');
        pause(1000);
    }

    clickMortgageBtn() {
        this.mortgage.click();
        pause(1000);
    }

    clickFirstTimeBuyersBtn() {
        this.firstTimeBuyers.click();
        pause(1000);
    }

    clickOurMortgageRatesBtn() {
        const scopeThis = this;
        waitUntil(scopeThis.ourMortgageRates.click(), 1000);
    }

    clickHaveNationwideMortgageNoBtn() {
        const scopeThis = this;
        waitUntil(scopeThis.selectorHaveNationwideMortgageNo.click(), 1000);
    }

    clickNationwideMortgageTypeChangingLenderBtn() {
        const scopeThis = this;
        waitUntil(scopeThis.selectorNationwideMortgageTypeChangingLender.click(), 1000);
    }

    setSearchPropertyValue(value) {
        const scopeThis = this;
        waitUntil(scopeThis.searchPropertyValue.setValue(value), 1000);
    }

    setSearchDepositAmount(amount) {
        const scopeThis = this;
        waitUntil(scopeThis.searchDepositAmount.setValue(amount), 1000);
    }

    setSearchMortgageTerm(value) {
        const scopeThis = this;
        waitUntil(scopeThis.searchMortgageTerm.setValue(value), 1000);
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
