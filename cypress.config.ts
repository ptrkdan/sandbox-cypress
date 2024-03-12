import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: '29mpmo',
	watchForFileChanges: false,
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: 'cypress/results',
		overwrite: false,
	},
	e2e: {
		// baseUrl: 'https://engineering.monstar-lab.com/en/',
		baseUrl: 'https://example.cypress.io/',
		env: {
			DATA_FILE_NAME: 'commands.json'
		},
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		excludeSpecPattern: ['**/cypress/e2e/blog.cy.ts']
	}
});
