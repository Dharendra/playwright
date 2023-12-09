
export default class TestUtilities {

  async getHomepage(page) {
    const homePageArray = await page.url().split('/');
    const homePage = homePageArray[0] + '//' + homePageArray[2];
    return homePage;
  }

  async pageLoad(page, strLocator) {
    try {
      const locatorType = strLocator.substring(0, 6);
      await page.waitForTimeout(500);
      if (locatorType === '.getBy') {
        await page[strLocator].waitFor({ state: 'visible', timeout: 15000 });
      } else {
        await page.locator(strLocator).waitFor({ state: 'visible', timeout: 15000 });
      }
    } catch (err) {
      console.log(err);
    }
    //wait for Navigation nor wait for loadstate - networkidle, domcontentloaded
  }

  async getInputTextBoxColor(page, pageLocator) {
    const pageObj = page.locator(pageLocator);
    const color = await pageObj.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue('background-color');
    });
    return color;
  }


}
