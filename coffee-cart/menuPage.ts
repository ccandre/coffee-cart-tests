import { Page, Locator } from '@playwright/test';

export class menuPage{
    readonly promoPopup: Locator;
    readonly acceptPromo: Locator;
    readonly declinePromo: Locator;

    constructor(private page: Page){
        this.promoPopup = page.getByRole('button', {name:'Yes, of course!'})
        this.acceptPromo = page.getByRole('button', {name:'Yes, of course!'})
        this.declinePromo = page.getByRole('button', {name: 'Nah, I\'ll skip.'})
    }

    async goto(){
        await this.page.goto('https://coffee-cart.app/');
    }

    async addCoffee(testId: string) {
        await this.page.getByTestId(testId).click();
      }

    async yesPromo(){
        await this.acceptPromo.click();
    }
    async noPromo(){
        await this.declinePromo.click();
    }
    async checkout(){
        await this.page.getByTestId('checkout').click();
    }
}