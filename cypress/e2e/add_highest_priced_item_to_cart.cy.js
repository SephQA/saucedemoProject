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

  });
});
