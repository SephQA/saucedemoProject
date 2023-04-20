describe("Ability to add the highest priced item to the shopping cart", () => {
  let testData;
  beforeEach(() => {
    cy.fixture("loginPageFixture").then((ftestData) => {
      testData = ftestData;
    });

    //In the steps, we can use IDs but preference goes to data-test as this is specific to testing.
    //Enter username and password & click on login button
    cy.loginViaUi();
  });

  it("should add the highest priced item to cart", () => {
    //verify user logged into "Swag Labs" page
    cy.contains(testData.login_page_name_Verification);

    // here we wait to ensure that the inventory page is loaded
    cy.get(".inventory_list").should("be.visible");

    // this step finds all the products and then selects the highest priced item
    let highestPrice = 0;
    let highestPriceItem;
    let itemTitle;

    cy.get(".inventory_item")
      .each((item) => {
        const itemPrice = parseFloat(
          item.find(".inventory_item_price").text().replace("$", "")
        );

        const tempiItemName = item.find(".inventory_item_name").text();

        if (itemPrice > highestPrice) {
          highestPrice = itemPrice;

          highestPriceItem = item;
          itemTitle = tempiItemName;
        }
      })
      .then(() => {
        // Add the highest priced item to cart
        highestPriceItem.find("button").click();

        cy.get(".shopping_cart_badge").should("have.text", "1");
        cy.get(".shopping_cart_badge").click();
        cy.contains(itemTitle);
      });

    //This code uses the cy.visit method to navigate to the URL, then uses the cy.get method to select the login form elements and enter the login details.
    //After logging in, it gets all the product prices on the page using the cy.get method and loops through them to extract the highest price. It then uses the cy.wrap method to select the highest priced item and add it to the cart by clicking the "Add to Cart" button.
    //Finally, it verifies that the item has been added to the cart by checking the text of the shopping cart badge element using the cy.get and should methods.
  });
});
