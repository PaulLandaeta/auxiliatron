import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      // https://github.com/bahmutov/cypress-slow-down
      commandDelay: 1000,
    },
  },
});
