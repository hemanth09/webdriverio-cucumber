import Page from './page';

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

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('https://www.nationwide.co.uk');
    }

    clickMortgageBtn() {
        return this.mortgage.click();
    }

    clickFirstTimeBuyersBtn() {
        return this.firstTimeBuyers.click();
    }

    clickOurMortgageRatesBtn() {
        const scopeThis = this;
        setTimeout(() => {
            scopeThis.ourMortgageRates.click();
        }, 1000);
    }

    clickHaveNationwideMortgageNoBtn() {
        const scopeThis = this;
        setTimeout(() => {
            scopeThis.selectorHaveNationwideMortgageNo.click();
        }, 1000);
    }

    clickNationwideMortgageTypeChangingLenderBtn() {
        const scopeThis = this;
        setTimeout(() => {
            scopeThis.selectorNationwideMortgageTypeChangingLender.click();
        }, 1000);
    }

    setSearchPropertyValue(value) {
        const scopeThis = this;
        setTimeout(() => {
            scopeThis.searchPropertyValue.setValue(value);
        }, 1000);
    }

    setSearchDepositAmount(amount) {
        const scopeThis = this;
        setTimeout(() => {
            scopeThis.searchDepositAmount.setValue(amount);
        }, 1000);
    }

    setSearchMortgageTerm(value) {
        const scopeThis = this;
        setTimeout(() => {
            scopeThis.searchDepositAmount.setValue(value);
        }, 1000);
    }

    clickFindAMortgageRatesButton() {
        const scopeThis = this;
        setTimeout(() => {
            scopeThis.findAMortgageRateBtn.click();
        }, 5000);
    }
}

export default new MortgagePage();
