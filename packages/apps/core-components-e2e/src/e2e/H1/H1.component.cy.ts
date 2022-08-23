describe('core-components: H1 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=h1--primary&args=pageTitle=;'));

    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Home Page');
    });
});
