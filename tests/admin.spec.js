const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('../pageobjects/LoginPage');
const { AdminPage } = require('../pageobjects/AdminPage');
const { login } = require('../fixtures/AuthUtil');
const testData = require('../data/testData.json');

test.describe('Admin Page', () => {


    test('should successfully create new user', async ({ page }) => {
        const adminPage = new AdminPage(page);

        // login
        await login(page, testData.login.valid.username, testData.login.valid.password);

        // navigate to admin page
        adminPage.navigateToAdminMenu();

        // add user
        await adminPage.addUser({
            role: testData.newUser.role,
            employeeName: testData.newUser.employeeName,
            status: testData.newUser.status,
            username: testData.newUser.username,
            password: testData.newUser.password
        });

        // verify user added
        await expect(adminPage.getSuccessToastText()).toBe(testData.newUser.userCreatedMessage);
    });

    test('system user search should return correct records', async ({ page }) => {
        // login
        const adminPage = new AdminPage(page);
        await login(page, testData.login.valid.username, testData.login.valid.password);

        // navigate to admin page
        await adminPage.navigateToAdminMenu();

        // search for system user with username Admin
        await adminPage.searchUser({ username: testData.login.valid.username, role: testData.login.valid.password });

        // verify search results

        const searchResults = await adminPage.getSearchResult();
        console.log(searchResults);

        // console.log(searchResults.foundUsername);
        // console.log(searchResults.foundRole);
        // verify first row has username Admin and role Admin
        await expect(searchResults.foundUsername).toBe(testData.login.valid.username);
        await expect(searchResults.foundRole).toBe(testData.login.valid.password);
    });
});