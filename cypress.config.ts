import { defineConfig } from 'cypress';
import csvReporterPlugin from './cypress/plugins/csv-reporter';

export default defineConfig({
	projectId: '29mpmo',
	watchForFileChanges: false,
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'cypress-reporter.json'
	},
	screenshotsFolder: 'cypress/reports/screenshots',
	retries: {
		runMode: 1,
		openMode: 0
	},
	e2e: {
		baseUrl: 'https://example.cypress.io/',
		env: {
			DATA_FILE_NAME: 'commands.json'
		},
		setupNodeEvents(on, config) {
			// implement node event listeners here
      csvReporterPlugin(on, config);
		},
		excludeSpecPattern: ['**/cypress/e2e/blog.cy.ts']
	}
});
