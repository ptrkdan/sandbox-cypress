import { sections } from '../../fixtures/section-data';
import { testCommonCases } from './common';

describe(
	'Section B',
	{
		baseUrl: 'http://localhost:5173'
	},
	() => {
		const section = sections[1];
		testCommonCases(section);
	}
);
