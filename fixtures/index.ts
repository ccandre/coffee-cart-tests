import { test as base } from '@playwright/test';
import { MenuPage } from '../coffee-cart/menuPage';
import { CheckoutPage } from '../coffee-cart/checkoutPage';

type MyFixtures = {
    menuPage: MenuPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<MyFixtures>({
    menuPage: async({page}, use) =>{
        const menuPage = new MenuPage(page);
        await menuPage.goto();
        await use(menuPage);
    },

    checkoutPage: async({page}, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },

  });

export { expect } from '@playwright/test';