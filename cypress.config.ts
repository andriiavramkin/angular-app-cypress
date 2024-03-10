import { defineConfig } from "cypress";

export default defineConfig({
   // These settings apply everywhere unless overridden
   component: {
   baseUrl: "http://localhost:4200",
   defaultCommandTimeout: 5000,
   viewportWidth: 1280,
   viewportHeight: 720,
   fixturesFolder: "cypress/fixtures",
   specPattern: "**/*.cy.{js,jsx,ts,tsx}",
   screenshotsFolder: "cypress/screenshots",
   videosFolder: "cypress/videos",
   modifyObstructiveCode: false,
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


