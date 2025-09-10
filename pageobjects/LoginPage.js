const { expect } = require('@playwright/test');
class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.submitButton = page.locator('[type="submit"]');
        this.invalidCredentialsAlertText = page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text');

    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
    async invalidLogin(username, password) {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
        return await this.invalidCredentialsAlertText.textContent();
    }

}

module.exports = { LoginPage };