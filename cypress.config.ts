import { defineConfig } from 'cypress';
import cypressMochawesomeReporterPlugin from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
	projectId: '29mpmo',
	watchForFileChanges: false,
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
    reportDir: 'cypress/results',
    inlineAssets: true,
    embedScreenshots: true,
	},
	screenshotsFolder: 'cypress/results/assets',
	retries: {
		runMode: 1,
		openMode: 0
	},
	e2e: {
		// baseUrl: 'https://engineering.monstar-lab.com/en/',
		baseUrl: 'https://example.cypress.io/',
		env: {
			DATA_FILE_NAME: 'commands.json'
		},
		setupNodeEvents(on, config) {
			// implement node event listeners here
			cypressMochawesomeReporterPlugin(on);
		},
		excludeSpecPattern: ['**/cypress/e2e/blog.cy.ts']
	}
});
