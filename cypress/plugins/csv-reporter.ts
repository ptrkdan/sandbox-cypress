import dayjs from 'dayjs';
import fs from 'fs';
import { Parser } from 'json2csv';
import { merge } from 'mochawesome-merge';
import path from 'path';
import { cwd } from 'process';

export default (on, config) => {
	on('after:run', () => {
		merge({ files: [path.resolve(cwd(), 'cypress/reports/mocha/*.json')] }).then((report) => {
			const results = report.results.flatMap((result) =>
				result.suites.flatMap((suite) =>
					suite.suites.flatMap((subSuite) =>
						subSuite.tests.map((test) => {
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

			const parser = new Parser();
			const csv = parser.parse(results);
			const dateTime = dayjs().format('YYYYMMDDHHmm');
			const fileName = `${dateTime}_cypress_report.csv`;
      fs.writeFileSync(path.resolve(cwd(), 'cypress/reports/csv', fileName), csv);
		});
	});
};
