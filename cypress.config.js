const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      //implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
  },
  env: {
    user_name: "standard_user",
    pass_word: "secret_sauce",
    wait_time_unit: 2000,
    wait_time_for_paragraphs_unit: 50,
  },
});
