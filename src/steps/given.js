import MortgagePage from '../pageobjects/mortgage.page';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given }) => {
    Given(/^I open the url "https:\/\/www\.nationwide\.co\.uk"$/, () => {
        MortgagePage.open();
        browser.getTitle().should.equal('Nationwide Building Society | building society, nationwide');
    });

    Given(/^I click on Mortgages$/, () => {
        MortgagePage.clickMortgageBtn();
        browser.getTitle().should.equal('Compare our Mortgage Rates | Nationwide');
    });

    Given(/^I click on New Mortgage Customer First time buyers$/, () => {
        MortgagePage.clickFirstTimeBuyersBtn();
        browser.getTitle().should.equal('First Time Buyer Mortgage | Get £500 Cashback | Nationwide');
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

    Given(/^I set property value to “300000”$/, () => {
        MortgagePage.setSearchPropertyValue('300,000');
    });

    Given(/^I set deposit amount to “150,000”$/, () => {
        MortgagePage.setSearchDepositAmount('150,000');
    });

    Given(/^I set mortgage term to “30”$/, () => {
        MortgagePage.setSearchMortgageTerm('30');
    });
});
