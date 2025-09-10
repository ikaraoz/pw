const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const { login } = require('../fixtures/AuthUtil');
const testData = require('../data/testData.json');


test('should login with valid credentials', async ({ page }) => {
    await login(page, testData.login.valid.username, testData.login.valid.password);
    const dashboardPage = new DashboardPage(page);
    await expect(page).toHaveURL(dashboardPage.url);
});