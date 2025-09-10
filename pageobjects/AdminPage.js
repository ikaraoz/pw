class AdminPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        // Menu locators
        this.menuItems = page.locator('.oxd-text.oxd-text--span.oxd-main-menu-item--name');
        // Add user locators
        this.addButton = page.getByText('Add');
        this.userRoleDropdown = page.locator('.oxd-select-text-input').first();
        this.employeeNameInput = page.getByPlaceholder('Type for hints...');
        this.statusDropdown = page.locator('.oxd-select-text-input').last();
        this.usernameField = page.locator('.oxd-input.oxd-input--active').nth(1);
        this.passwordField = page.locator('input[type="password"]').first();
        this.confirmPasswordField = page.locator('input[type="password"]').last();
        this.saveButton = page.getByText('Save');
        this.addUserSuccessAlert = page.locator('.oxd-toast-content.oxd-toast-content--success');
        // Search locators
        this.searchUsernameField = page.locator('.oxd-input.oxd-input--active').last();
        this.searchRoleDropdown = page.locator('.oxd-select-text-input').first();
        this.searchButton = page.getByText('Search');
        this.searchResultRow = page.locator('.oxd-table-row.oxd-table-row--with-border').nth(1);
        this.searchResultUsername = page.locator('.oxd-table-cell.oxd-padding-cell').nth(1);
        this.searchResultRole = page.locator('.oxd-table-cell.oxd-padding-cell').nth(2);
    }

    async navigateToAdminMenu() {
        await this.menuItems.last().waitFor();
        const allMenuItems = await this.menuItems.allTextContents();
        for (let i = 0; i < allMenuItems.length; i++) {
            if (allMenuItems[i] === 'Admin') {
                await this.menuItems.nth(i).click();
                break;
            }
        }
    }

    async addUser({ role, employeeName, status, username, password }) {
        await this.addButton.click();
        await this.userRoleDropdown.click();
        await this.page.getByRole('option', { name: role }).click();
        await this.employeeNameInput.fill(employeeName);
        await this.statusDropdown.click();
        await this.page.getByRole('option', { name: status }).click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.confirmPasswordField.fill(password);
        await this.saveButton.click();
    }

    async getSuccessToastText() {
        await this.addUserSuccessAlert.waitFor();
        return await this.addUserSuccessAlert.textContent();
    }

    async searchUser({ username, role }) {
        await this.searchUsernameField.fill(username);
        await this.searchRoleDropdown.click();
        await this.page.getByRole('option', { name: role }).click();
        await this.searchButton.click();
    }

    async getSearchResult() {
        await this.searchResultRow;
        const foundUsername = await this.searchResultUsername.textContent();
        const foundRole = await this.searchResultRole.textContent();
        return { foundUsername, foundRole };
    }
}

module.exports = { AdminPage };