import { test, expect } from '@playwright/test';
import TestUtilities from '../src/fixtures/utilities';
import { HomePage } from '../src/pageObjects/homePage';

//run these tests serially so that they reuse the same data and dont duplicate setup/teardown
test.describe.configure({ mode: 'serial' });

test.describe('Happy Path', async () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    expect(await homePage.getHeadline()).toContain('Learn more about SteadyPace');
  });
  
  test('happy Path with 5 years Investment duration ', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(5000);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('50000');
    // Move Intereset Rate Slider to 5 Years
    homePage.moveIntersetRate('5');
    // Verify Slider is set to 5 Years from  UI
    expect (homePage.moveIntersetRate).toEqual('5');
    // Verify interestRate is Not null and its a float value
    expect (!Number.isInteger(homePage.interestRate)).toBe(true)

    // Verify Projected  value is not null
    expect (Number.isInteger(homePage.projecteValue)).toBe(true)
    
  });

  test('happy Path with 10 years Investment duration ', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(5000);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('50000');
    // Move Intereset Rate Slider to 10 Years
    homePage.moveIntersetRate('10');
    // Verify Slider is set to 10 Years from  UI
    expect (homePage.moveIntersetRate).toEqual('10');
    // Verify interestRate is Not null and its a float value
    expect (!Number.isInteger(homePage.interestRate)).toBe(true)

    // Verify Projected  value is not null
    expect (Number.isInteger(homePage.projecteValue)).toBe(true)
  });

  test('happy Path with 3 years Investment duration ', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(5000);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('50000');
    // Move Intereset Rate Slider to 3 Years
    homePage.moveIntersetRate('3');
    // Verify Slider is set to 3 Years from  UI
    expect (homePage.moveIntersetRate).toEqual('3');
    // Verify interestRate is Not null and its a float value
    expect (!Number.isInteger(homePage.interestRate)).toBe(true)

    // Verify Projected  value is not null
    expect (Number.isInteger(homePage.projecteValue)).toBe(true)
  });

  test('happy Path with 1 years Investment duration ', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(5000);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('50000');
    // Move Intereset Rate Slider to 1 Years
    homePage.moveIntersetRate('1');
    // Verify Slider is return value of 3 Years from  UI
    expect (homePage.moveIntersetRate).toEqual('3');
    // Verify interestRate is Not null and its a float value
    expect (!Number.isInteger(homePage.interestRate)).toBe(true)

    // Verify Projected  value is not null
    expect (Number.isInteger(homePage.projecteValue)).toBe(true)
  });

  test('happy Path with 12 years Investment duration ', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(5000);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('50000');
    // Move Intereset Rate Slider to 12 Years
    homePage.moveIntersetRate('12');
    // Verify Slider is return value of 10 Years from  UI
    expect (homePage.moveIntersetRate).toEqual('10');
    // Verify interestRate is Not null and its a float value
    expect (!Number.isInteger(homePage.interestRate)).toBe(true)

    // Verify Projected  value is not null
    expect (Number.isInteger(homePage.projecteValue)).toBe(true)
  });
  
});

test.describe(' Investment amount Validation', async () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    expect(await homePage.getHeadline()).toContain('Learn more about SteadyPace');
  });

  test('Investment amount: 500', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(500);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('500');

    // Verify Text Backgorund is Red
    expect(await homePage.checkBackGroundColor()).toBe(true)
    
    // Verify Projected  value is null
    expect ((homePage.projecteValue)).toBeNull
  });

  test('Investment amount: -500', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(-500);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('-500');

    // Verify Text Backgorund is Red
    expect(await homePage.checkBackGroundColor()).toBe(true)
    
    // Verify Projected  value is null
    expect ((homePage.projecteValue)).toBeNull
  });

  test('Investment amount: 2000000', async ({ page }) => {
    const homePage = new HomePage(page);
    // Enter Invesment Amount 5000
    var returnedAmount = await homePage.enterInvestmentAmount(-500);
    // Verify 5000 amount is returned from the text 
    expect (returnedAmount).toEqual('2000000');

    // Verify Text Backgorund is Red
    expect(await homePage.checkBackGroundColor()).toBe(true)
    
    // Verify Projected  value is null
    expect ((homePage.projecteValue)).toBeNull
  });

});

