import { sections } from '../../fixtures/section-data';
import { testCommonCases } from './common';

describe(
	'Section C',
	{
		baseUrl: 'http://localhost:5173'
	},
	() => {
    const section = {
      ...sections[2],
      services: [
				{
					"name": "Service C-1X",
					"number": 1
				},
      ]
    };
		testCommonCases(section);
	}
);
