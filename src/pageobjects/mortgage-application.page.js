import Page from './page';
import pause from '../support/actions/pause';

const locators = {
    pageTitle: 'h1.headingSize02',
};

class MortApplicationPage extends Page {
    /**
     * define or overwrite page methods
     */

    verifyApplicationPageTitle(pageTitle) {
        browser.getText(locators.pageTitle).should.equal(pageTitle);
        pause(2000);
    }
}

export default new MortApplicationPage();
