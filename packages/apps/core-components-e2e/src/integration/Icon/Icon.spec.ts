describe('core-components: Icon component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=icon--primary'));

  it('should render the component', () => {
    cy.get('span').should('contain', 'RK');
  });
});
