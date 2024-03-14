import { defineConfig } from "cypress";

export default defineConfig({

  e2e: {
    baseUrl: "http://localhost:4200",
   defaultCommandTimeout: 5000,
   viewportWidth: 1280,
   viewportHeight: 720,
   fixturesFolder: "cypress/fixtures",
   specPattern: "**/*.cy.{js,jsx,ts,tsx}",
   screenshotsFolder: "cypress/screenshots",
   videosFolder: "cypress/videos",
   modifyObstructiveCode: false,
   retries: { runMode: 1, openMode: 1 },
   scrollBehavior: "center",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


