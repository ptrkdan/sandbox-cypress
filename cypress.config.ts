import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: '29mpmo',
	watchForFileChanges: false,
	e2e: {
		// baseUrl: 'https://engineering.monstar-lab.com/en/',
		baseUrl: 'https://example.cypress.io/',
		setupNodeEvents(on, config) {
			// implement node event listeners here
    },
    excludeSpecPattern: [
      '/cypress/e2e/blog.cy.ts'
    ]
	}
});
