describe('Portfolio App E2E Test', () => {
  it('loads the home page and navigates to About page', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Welcome to My Portfolio').should('be.visible');

    cy.get('a[href="/about"]').first().click();

    cy.url().should('include', '/about');
    cy.contains('About Me').should('be.visible');
  });
});
