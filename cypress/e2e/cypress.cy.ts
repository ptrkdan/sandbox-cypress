describe('Cypress Kitchen Sink', () => {
	const dataFileName = Cypress.env('DATA_FILE_NAME');
	const data = require('../fixtures/' + dataFileName) as {
		commands: {
			title: string;
			link: string;
		}[];
	};

	data.commands.forEach((command) => {
		context(command.title, () => {
			beforeEach(() => {
				cy.visit(command.link);
			});
			it('displays command title', () => {
				cy.get('.container > h1').should('have.text', command.title);
			});
		});
	});
});
