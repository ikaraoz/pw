const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const testData = require('../data/testData.json');

test.describe('Login Page', () => {

    test('should login with valid credentials', async ({ page }) => {
        const loginpage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        await loginpage.login(testData.login.valid.username, testData.login.valid.password);
        await expect(page).toHaveURL(dashboardPage.url);

    });

    test('@Login should fail with invalid credentials', async ({ page }) => {
        const loginpage = new LoginPage(page);
        const alertText = await loginpage.invalidLogin(testData.login.invalid.username, testData.login.invalid.password);
        await expect(alertText).not.toBeNull();
        await expect(alertText).toMatch(testData.login.invalid.errorMessage);
    });
});

// if id is present css -> //#endregion
// if class attribute is present -> .classname
// css based on any attributed -> [attribute="value"]
// css with traversing from parent to child -> parenttagname >> childtagname
// if locator based on text -> text="textvalue"
