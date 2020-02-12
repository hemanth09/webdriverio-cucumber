import MortgagePage from '../pageobjects/mortgage.page';
import MortgageResultsPage from '../pageobjects/mortgage-results.page';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ When }) => {
    When(/^I click "Find a mortgage rate" button$/, () => {
        MortgagePage.clickFindAMortgageRatesButton();
    });

    When(/^I apply filters of Mortgage type to “Fixed rate”$/, () => {
        MortgageResultsPage.clickFixedRate();
    });

    When(/^I apply filters of Product fee to “With Fee”$/, () => {
        MortgageResultsPage.clickWithFee();
    });
});
