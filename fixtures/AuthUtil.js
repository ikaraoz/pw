const { LoginPage } = require('../pageobjects/LoginPage');
async function login(page, username, password) {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
}

module.exports = { login };