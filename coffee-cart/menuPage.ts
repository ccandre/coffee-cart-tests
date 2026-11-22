import { Page, Locator } from '@playwright/test';

export class MenuPage{
    readonly promoPopup: Locator;
    readonly acceptPromo: Locator;
    readonly declinePromo: Locator;

    constructor(private page: Page){
        this.promoPopup = page.getByRole('button', {name:'Yes, of course!'});
        this.acceptPromo = page.getByRole('button', {name:'Yes, of course!'});
        this.declinePromo = page.getByRole('button', {name: 'Nah, I\'ll skip.'});
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

    coffeeHeading(name: string) {
        return this.page.getByRole('heading', { name });
      }
      
    get chineseText() {
        return this.page.getByText(/[\u4e00-\u9fff]/);
    }

    async translateCoffee(name: string) {
        await this.page.getByRole('heading', { name }).dblclick();
    }

    async addToCartOption(testId: string){
        await this.page.getByTestId(testId).click({button: 'right'})
    }

    addToCartDialog(testId: string) {
        return this.page.getByText(`Add ${testId.replace(/_/g, ' ')} to the cart`);
      }
}