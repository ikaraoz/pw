class DashboardPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.url = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';
    }
}

module.exports = { DashboardPage };