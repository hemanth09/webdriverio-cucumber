import MortgagePage from '../pageobjects/mortgage.page';
import MortgageResultsPage from '../pageobjects/mortgage-results.page';
import MortgageApplicationPage from '../pageobjects/mortgage-application.page';
import { defineSupportCode } from 'cucumber';

const locator = {
    resultHeader: '.searchResultsSummary .titleStyle01',
};

defineSupportCode(({ Then }) => {
    Then(/^I see the filters and search results populated$/, () => {
        MortgagePage.isSearched().should.be.true;

        // assert with the results found
        browser.getText(locator.resultHeader).should.equal("We've found 10 mortgages for you");
    });

    Then(/^I see the filters and search results updated$/, () => {
        MortgagePage.isSearched().should.be.true;

        // assert with the results updated
        browser.getText(locator.resultHeader).should.equal("We've found 4 mortgages for you");
    });

    Then(/^I verify the results with below following rates available$/, (results) => {
        // eslint-disable-next-line no-console
        const data = results.raw();
        data.map((item, index) => MortgageResultsPage.verifyResults(item, index));
    });

    Then(/^I should be directed to the "([^"]*)"$/, (pageTitle) => {
        MortgageApplicationPage.verifyApplicationPageTitle(pageTitle);
    });
});
