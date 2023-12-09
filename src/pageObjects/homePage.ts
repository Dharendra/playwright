import { expect, type Locator, type Page } from '@playwright/test';
import TestUtilities from '../fixtures/utilities';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    async getHeadline() {
        console.log('home.page.getTitle');
        const utilities = new TestUtilities();
        await utilities.pageLoad(this.page, 'h1:has-text("SteadyPace™ Growth calculator")');
        return await this.page.innerText('title');
    }

    async enterInvestmentAmount(amount){
        await this.page.getByTestId('investmentamount').fill(amount);
        var returnAmount = await this.page.locator(`p:has-text("${amount}")`).innerText();
        return returnAmount;
    }

    async moveIntersetRate(rate) {
        // This will need more fine tuning after running it against application couple of times
        console.log('Move Intreset Rate');
        const s = await this.page.$("span:nth-child(2)")
        let ele = this.page.locator(".absolute top-4 text-link-x-small.text-action-blue-l4 whitespace-nowrap")
        let text = await ele.textContent();
        let isCompleted = false;
        if (s) {
            while (!isCompleted) {
                let srcBound = await s.boundingBox();
                if (srcBound) {
                    await this.page.mouse.move(srcBound.x + srcBound.width / 2,
                        srcBound.y + srcBound.height / 2)
                    await this.page.mouse.down();
                    await this.page.mouse.move(srcBound.x + 15, srcBound.y + srcBound.height / 2);
                    await this.page.mouse.up();
                    let text = await ele.inputValue();
                    if (text == rate) {
                        isCompleted = true;
                    }
                }
            }
        }
        return text;
    }
    async interestRate(){
        var returnAmount = await this.page.getByTestId('intereset').innerText();
        var returnedRate = parseFloat(returnAmount.replace('%', ''));
        return returnedRate;
    }
    async projecteValue(){
        var returnValue = await this.page.getByTestId('value').innerText();
        var returnedValue = parseFloat(returnValue.replace(/[^\w\s]/gi, ''));
        return returnedValue;
    }
    
    async checkBackGroundColor(){
        let desiredColor: string = 'rgb(255, 255, 255)'; // Check backgorund is red
        const utilities = new TestUtilities();
        const color = await utilities.getInputTextBoxColor(this.page,'investmentamount');
        if (desiredColor.substring(4, 7) == color.substring(4, 7))
        return true;
    }
}