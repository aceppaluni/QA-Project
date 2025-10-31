import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test.describe('SauceDemo Login', () => {

    test('@ui successful login', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        //Assert successful login by checking url or page content
        await expect(page).toHaveURL(/inventory.html/);
    });

    test('@ui login with invalid credentials shows error message', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong_password');

        const error = await loginPage.getErrorMessageText();
        await expect(error).toContain('Username and password do not match');
    });
});