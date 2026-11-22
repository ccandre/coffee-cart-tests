import { test, expect } from '../fixtures';
import { products }from '../test-data/data';

test('promo popup appears every 3rd item in the cart', async ({ menuPage }) => {
    await menuPage.addCoffee(products.mocha);
    await menuPage.addCoffee(products.flatWhite);
    await expect(menuPage.acceptPromo).toBeHidden();

    await menuPage.addCoffee(products.cappuccino);
    await expect(menuPage.acceptPromo).toBeVisible();
});


test('double click coffee name to get chinese translation', async ({ menuPage}) => {
    await expect(menuPage.chineseText).toHaveCount(0);
    await menuPage.translateCoffee(products.mocha);

    await expect(menuPage.chineseText.first()).toBeVisible();
    await expect(menuPage.coffeeHeading(products.mocha)).toBeHidden();

});

test('right click coffee name to open add to cart popup', async ({ menuPage}) => {
    await menuPage.addToCartOption(products.flatWhite);
    await expect(menuPage.addToCartDialog(products.flatWhite)).toBeVisible();
});
