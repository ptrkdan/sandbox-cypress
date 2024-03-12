// import { blogPosts } from '../fixtures/blog-posts';

describe('Cypress Kitchen Sink', () => {
  const commands = Cypress.env('commands');
  console.log(commands);
	commands.forEach((command) => {
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
