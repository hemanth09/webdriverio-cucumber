import Page from './page';
import pause from '../support/actions/pause';
import waitForVisible from '../support/actions/waitForVisible';

class MortApplicationPage extends Page {
    get pageTitle() { return $('h1.headingSize02'); }

    /**
     * define or overwrite page methods
     */

    verifyApplicationPageTitle(pageTitle) {
        waitForVisible(this.pageTitle, 3000);
        this.pageTitle.getText().should.equal(pageTitle);
        pause(2000);
    }
}

export default new MortApplicationPage();
