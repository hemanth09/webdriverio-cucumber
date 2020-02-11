// eslint-disable-next-line no-unused-vars
import { Given, Then, When } from 'cucumber';

import MortgagePage from '../pageobjects/mortgage.page';

When(/^I click "Find a mortgage rate" button$/, () => {
    MortgagePage.clickFindAMortgageRatesButton();
});
