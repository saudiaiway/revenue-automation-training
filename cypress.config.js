const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    // projectId: "mdguaa",
    baseUrl: "https://typicode.com",
    specPattern: "**/*.cy.js",
    env: {
      PREFLIGHT_API_KEY:
        "NjU2NjJkNjItYTEyMi00NzU0LTk4MzUtM2Q1YjQ5MzE4YTE0OmI2NzU4NTNkLTk5ZWYtNDJlZC05ZjBjLWQ4MjI2NjMxYjlmOQ==",
      allureResultsPath: "allure-results",
      tmsPrefix: "https://url-to-bug-tracking-system/task-",
      issuePrefix: "https://url-to-tms/tests/caseId-",
    },
  },
});
