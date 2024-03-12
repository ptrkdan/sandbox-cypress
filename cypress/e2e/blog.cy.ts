// import { blogPosts } from '../fixtures/blog-posts';

describe('Monstarlab Engineering Blog', () => {
  const blogPosts = Cypress.env("blogPosts")
	blogPosts.forEach((post) => {
		context(post.title, () => {
			beforeEach(() => {
				cy.visit(post.link);
			});
			it('displays blog title', () => {
				cy.get('[class^="Hero"] h1').should('have.text', post.title);
			});
			it('displays publish date', () => {
				cy.get('[class^="Hero"] time').should('have.text', post.publishDate);
			});
      it('displays author name at the bottom of the page', () => {
        
        // MEMO: Would be easier to write if using data-* attributes
        // i.e., data-test="author"
        // --> cy.get('[data-test="author"]')
				cy.get('[class^="Section"]')
          .eq(-2)
					.find('[class^="ArticleAuthor"] h4 > a')
					.should('have.text', post.author);
			});
		});
	});
});
