import { test, expect } from '../fixtures';
import {customer, products}from '../test-data/data';

test('buy 1 coffee', async ({ menuPage, checkoutPage }) => {
    await menuPage.addCoffee(products.mocha);
    await menuPage.checkout();
    await checkoutPage.submitOrder(customer);
    await expect(checkoutPage.successMsg).toBeVisible();
});

test('buy 3 coffees and accept promo', async ({ menuPage, checkoutPage }) => {
    await menuPage.addCoffee(products.mocha);
    await menuPage.addCoffee(products.cappuccino);
    await menuPage.addCoffee(products.flatWhite);

    await menuPage.yesPromo();
    await menuPage.checkout();

    await checkoutPage.submitOrder(customer);
    await expect(checkoutPage.successMsg).toBeVisible();
});

test('buy 3 coffees and decline promo', async ({ menuPage, checkoutPage }) => {
    await menuPage.addCoffee(products.mocha);
    await menuPage.addCoffee(products.cappuccino);
    await menuPage.addCoffee(products.flatWhite);

    await menuPage.noPromo();
    await menuPage.checkout();
    
    await checkoutPage.submitOrder(customer);
    await expect(checkoutPage.successMsg).toBeVisible();
});