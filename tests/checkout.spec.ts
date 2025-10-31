import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { InventoryPage } from './pages/inventoryPage';
import { CheckoutPage } from './pages/checkoutPage';

test('@ui @e2e @checkout @smoke complete checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(page).toHaveURL(/inventory/);

  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();

  await checkoutPage.checkoutInfo('John', 'Doe', '12345');
  await checkoutPage.finishOrder();

  await expect(checkoutPage.confirmationMessage).toHaveText(/thank you for your order!/i);
})