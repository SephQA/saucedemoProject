Description of Test

Steps

1. Navigate to the following URL https://www.saucedemo.com/
2. Login using the following details (username: standard_user, password: secret_sauce)
3. Select the highest price item (Please do not use the “Sort By” option on the page).
4. Add the selected highest price item to the cart

Run tests using npm run & follwoing commands:

//opens cypress app
"cypress:open": "cypress open",

//runs tests headless
"cypress:smoke-test": "cypress run --spec cypress/e2e/*.js" 

FYI npm run cypress:smoke-test > runs all existing tests
