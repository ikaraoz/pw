import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('Admin');
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Admin');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Kumar Patil');
  await page.getByText('Kumar Sangakara Patil').click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).locator('span').click();
  await page.getByRole('columnheader', { name: '' }).locator('i').click();
  await page.getByRole('row', { name: ' d8bLca8 ESS XlFbflN BkPYbzH' }).locator('span i').click();
  await page.getByRole('row', { name: ' FMLName ESS Qwerty LName' }).locator('span i').click();
  await page.getByRole('row', { name: ' d8bLca8 ESS XlFbflN BkPYbzH' }).getByRole('button').first().click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.locator('.oxd-icon.bi-calendar').first().click();
  await page.locator('form').getByRole('button', { name: '' }).click();
  await page.locator('form').getByRole('button', { name: '' }).click();
  await page.locator('form').getByRole('button', { name: '' }).click();
  await page.locator('form').getByRole('button', { name: '' }).click();
  await page.getByRole('listitem').filter({ hasText: 'September' }).click();
  await page.getByText('August').click();
  await page.getByText('2024').click();
  await page.getByText('2021', { exact: true }).click();
  await page.getByText('10').click();
  await page.getByRole('textbox', { name: 'dd-mm-yyyy' }).nth(1).click();
  await page.getByText('Today').click();
  await page.getByRole('link', { name: 'Assign Leave' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Performance' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('canvas').first().click({
    position: {
      x: 27,
      y: 97
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 24,
      y: 81
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 25,
      y: 60
    }
  });
  await page.locator('.orangehrm-attendance-card-summary-total').click();
});