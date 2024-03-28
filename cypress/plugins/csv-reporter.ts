import dayjs from 'dayjs';
import fs from 'fs';
import { Parser } from 'json2csv';
import { merge } from 'mochawesome-merge';
import path from 'path';
import { cwd } from 'process';

/**
 * Retrieves the results from a report object and returns an array of test results.
 * Each test result contains the section, service, test, and status properties.
 *
 * @param report - The report object containing the test results.
 * @returns An array of test results.
 */
const getResults = (report: any): string[] => {
	return report.results.flatMap((result: any) =>
		result.suites.flatMap((suite: any) =>
			suite.suites.flatMap((subSuite: any) =>
				subSuite.tests.map((test: any) => {
					let status = '';
					switch (test.state) {
						case 'passed':
							status = '✅';
							break;
						case 'failed':
							status = '❌';
							break;
						case 'pending':
						default:
							status = 'ー';
							break;
					}
					return {
						section: suite.title,
						service: subSuite.title,
						test: test.title,
						status
					};
				})
			)
		)
	);
};

/**
 * Generates a CSV report based on the provided results array.
 * @param results - An array of results to be included in the CSV report.
 */
const generateCSVReport = async (results: string[]) => {
	const parser = new Parser();
	const csv = parser.parse(results);
	const dateTime = dayjs().format('YYYYMMDDHHmm');
	const fileName = `${dateTime}_cypress_report.csv`;
	fs.writeFileSync(path.resolve(cwd(), 'cypress/reports/csv', fileName), csv);
};

/**
 * Cypress plugin for generating a CSV report after test execution.
 * @param {Cypress.PluginEvents} on - Cypress event system.
 * @param {Cypress.PluginConfigOptions} config - Cypress configuration options.
 */
export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
	on('after:run', () => {
		return new Promise((resolve, reject) => {
			try {
				const files = [path.resolve(cwd(), 'cypress/reports/mocha/*.json')];
				merge({ files }).then(async (report) => {
					const results = getResults(report);

					await generateCSVReport(results);
				});
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	});
};
