import Page from './page';
import pause from '../support/actions/pause';
import waitForVisible from '../support/actions/waitForVisible';

const locators = {
    '2yrsFixed': '[data-product-name="2 yr  Fixed "]',
    '3yrsFixed': '[data-product-name="3 yr  Fixed "]',
    '5yrsFixed': '[data-product-name="5 yr  Fixed "]',
    '10yrsFixed': '[data-product-name="10 yr  Fixed "]',
};

class MortgageResultsPage extends Page {
/**
    * define elements
    */

    get checkInputFixed() { return $('//*[@id="fixed"]'); }

    get checkInputWithFee() { return $('//*[@id="product-fee-fee"]'); }

    /**
     * define or overwrite page methods
     */

    clickFixedRate() {
        const scopeThis = this;
        waitForVisible(scopeThis.checkInputFixed, 5000);
        browser.execute(() => {
            document.getElementById('fixed').click();
        });
        pause(1000);
    }

    clickWithFee() {
        const scopeThis = this;
        waitForVisible(scopeThis.checkInputWithFee, 5000);
        browser.execute(() => {
            document.getElementById('product-fee-fee').click();
        });
        pause(1000);
    }

    verifyResults(item) {
        const selector = item[0];
        const yearsFixed = item[1];
        browser.getText(locators[selector]).includes(yearsFixed);
    }
}

export default new MortgageResultsPage();
