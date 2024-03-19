import { sections } from '../../fixtures/section-data';
import { testCommonCases } from './common';

describe(
	'Section A',
	{
		baseUrl: 'http://localhost:5173'
	},
	() => {
		const section = sections[0];
		testCommonCases(section);
	}
);
