# Playwright-Tests

This repo contains test for MYGA Calculator. This language used is Typescript.

## Requirements
- Node v20.8.0
  - Older versions may work but they have not been tested

## Executing Tests

1. Clone this repository to your machine.
2. Open a terminal and go to the folder where you cloned this repository.
3. Run these commands. You will only need to run them once.
```
npm install
npx playwright install
```
4. To run the tests, use this command:
```
npx playwright test
```

## Notes about the Tests

- The Test Focus on Postive/Happy Path and Negative scenarios 
- Happy Path : Test Checks for Different Investment Duration : 5 Years.
- Boundary Condition : Minium 3 Years , Maximum : 10 Years , Lower Boundry Condition : 1 year , Out of Boundry Condition : 12 Year.
- Negative Input Value for Tests: -500, 500 and 2000000.
- Performance Test : We can run 100 threads (concurrent hits to the endpoint) for getting Projected account value , this way we can validate the Backend returning correct calcuated values