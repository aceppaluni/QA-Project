import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test.describe('@ui @login @negative negative Login Tests', () => {

    test('@ui @negative should show an error for invalid password', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('validUser', 'invalidPassword');

        await expect(page.locator('[data-test="error"]')).toContainText('sadface');
    })
})