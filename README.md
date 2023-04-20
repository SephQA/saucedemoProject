Description of Test

This code uses the cy.visit method to navigate to the URL, then uses the cy.get method to select the login form elements and enter the login details.
After logging in, it gets all the product prices on the page using the cy.get method and loops through them to extract the highest price. It then uses the cy.wrap method to select the highest priced item and add it to the cart by clicking the "Add to Cart" button.
Finally, it verifies that the item has been added to the cart by checking the text of the shopping cart badge element using the cy.get and should methods.

Steps

1. Navigate to the following URL https://www.saucedemo.com/
2. Login using the following details (username: standard_user, password: secret_sauce)
3. Select the highest price item (Please do not use the “Sort By” option on the page).
4. Add the selected highest price item to the cart

Run tests using npm run & following commands:

//opens cypress app >> 

"cypress:open": "cypress open"

//runs all existing tests headless >> 

"cypress:smoke-test": "cypress run --spec cypress/e2e/*.js" 