import { sections } from '../../fixtures/section-data';
import { testCommonCases } from './common';

describe(
	'Section CX',
	{
		baseUrl: 'http://localhost:5173'
	},
	() => {
		const section = sections[2];
		testCommonCases(section);
	}
);
