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

    verifyResults(item, index) {
        // verify fixed years
        const selector = item[0];
        const yearsFixed = item[1];
        browser.getText(locators[selector]).includes(yearsFixed);

        // verify 2 years monthly payment
        const monthlyPayments = item[2];
        browser.getText(`.ratesTableWrapper:nth-child(${index + 1}) td:nth-child(1) > div.keyData > strong`).should.equal(monthlyPayments);

        // verify 2years initial rate
        const initialRate = item[3];
        browser.getText(`.ratesTableWrapper:nth-child(${index + 1}) td.initialRateCell > div.keyData > strong`).should.equal(initialRate);

        // verify the product fee
        const productFee = item[4];
        browser.getText(`.ratesTableWrapper:nth-child(${index + 1}) td:nth-child(3) > .keyData`).should.equal(productFee);

        // verifies 2years Overall Cost For Comparison
        const costComparison = item[5];
        browser.getText(`.ratesTableWrapper:nth-child(${index + 1}) td:nth-child(4) > div.keyData > strong`).should.equal(costComparison);

        // verify Total paid over 2 years (excludes product fee)
        const totalProductValue = item[6];
        browser.getText(`.ratesTableWrapper:nth-child(${index + 1}) div > table > tbody > tr:nth-child(2) > td.penultimate > div.keyData`).should.equal(totalProductValue);
    }

    applyForProduct(productName) {
        browser.click('.ratesTableWrapper:nth-child(3) tr:nth-child(1) .iconText:nth-child(3)');
        pause(2000);
        browser.click(`[data-productname="${productName}"]`);
    }
}

export default new MortgageResultsPage();
