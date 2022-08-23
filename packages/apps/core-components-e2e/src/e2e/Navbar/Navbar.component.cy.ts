describe('core-components: Navbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbar--primary&args=children;iconString=;'));

    it('should render the component', () => {
      cy.get('span[id="icon-title"]').should('contain', 'Rajesh');
    });
});
