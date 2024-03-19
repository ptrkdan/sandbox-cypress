export const checkSectionName = (sectionName: string) => {
	cy.get('[data-cy="section-name"]').should('have.text', sectionName);
	// Get an h1 element with the data-cy attribute set to "section-title" and check its text
};

export const openModal = (index: number) => {
	cy.get('button[data-cy="show-service"]').eq(index).click();
	cy.get('.modal').should('be.visible');
};

export const checkServiceName = async (serviceName: string, index: number) => {
	cy.get('button[data-cy="show-service"]').eq(index).should('contain', serviceName);
};

export const checkServiceNameInModal = (serviceName: string) => {
	cy.get('.modal [data-cy="service-name"]').should('contain', serviceName);
};

export const checkServiceNumberInModal = (serviceNumber: number) => {
	cy.get('.modal [data-cy="service-number"]').should('contain', serviceNumber);
};

export const testCommonCases = (section: {
	name: string;
	url: string;
	services: { name: string; number: number }[];
}) => {
	beforeEach(() => {
		cy.visit(section.url);
		cy.wait(500); // Required for svelte to fully load the page
	});

	it(`スケション名として「${section.name}」が表示されること`, () => {
		checkSectionName(section.name);
	});

	section.services.forEach((service, index) => {
		context(service.name, () => {
			it(`サービス名として「${service.name}」が表示されること`, () => {
				checkServiceName(service.name, index);
				openModal(index);
			});

			it(`サービス名として「${service.name}」がモーダル内に表示されること`, () => {
				openModal(index);
				checkServiceNameInModal(service.name);
			});

			it(`サービス番号として「${service.number}」がモーダル内に表示されること`, () => {
				openModal(index);
				checkServiceNumberInModal(service.number);
			});
		});
	});
};
