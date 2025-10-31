import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly firstItemAddToCartButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstItemAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addFirstItemToCart() {
        await this.firstItemAddToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}