import { Page, Locator } from '@playwright/test';

export class CheckoutPage{
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly submitButton: Locator;
    readonly successMsg: Locator;

    constructor(private page: Page){
        this.nameInput = page.getByRole('textbox', {name: 'Name'});
        this.emailInput = page.getByRole('textbox', {name: 'Email'});
        this.submitButton = page.getByRole('button', {name: 'Submit'});
        this.successMsg = page.getByRole('button', {name: 'Thanks for your purchase.'});
    }

    async submitOrder(customer: {name: string; email: string}) {
        await this.nameInput.fill(customer.name);
        await this.emailInput.fill(customer.email);
        await this.submitButton.click();
    }
}