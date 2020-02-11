// eslint-disable-next-line no-unused-vars
import { Given, Then } from 'cucumber';

import MortgagePage from '../pageobjects/mortgage.page';

Then(/^I apply filter Mortgage type to “Fixed rate”$/, () => {
    MortgagePage.clickMortgageBtn();
});
