import MortgagePage from '../pageobjects/mortgage.page';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given }) => {
    Given(/^I open the url "([^"]*)"$/, (url) => {
        MortgagePage.open(url);
        MortgagePage.verifyPageTitle('Nationwide Building Society | building society, nationwide');
    });

    Given(/^I click on Mortgages$/, () => {
        MortgagePage.clickMortgageBtn();
        MortgagePage.verifyPageTitle('Compare our Mortgage Rates | Nationwide');
    });

    Given(/^I click on New Mortgage Customer First time buyers$/, () => {
        MortgagePage.clickFirstTimeBuyersBtn();
        MortgagePage.verifyPageTitle('First Time Buyer Mortgage | Get £500 Cashback | Nationwide');
    });

    Given(/^I click on our Mortgage Rates$/, () => {
        MortgagePage.clickOurMortgageRatesBtn();
    });

    Given(/^Do you have a Nationwide mortgage I select No$/, () => {
        MortgagePage.clickHaveNationwideMortgageNoBtn();
    });

    Given(/^What type of mortgage are you looking for I select “I’m changing lender”$/, () => {
        MortgagePage.clickNationwideMortgageTypeChangingLenderBtn();
    });

    Given(/^I set property value to "([^"]*)"$/, (value) => {
        MortgagePage.setSearchPropertyValue(value);
    });

    Given(/^I set deposit amount to "([^"]*)"$/, (amount) => {
        MortgagePage.setSearchMortgageAmount(amount);
    });

    Given(/^I set mortgage term to "([^"]*)"$/, (term) => {
        MortgagePage.setSearchMortgageTerm(term);
    });
});
