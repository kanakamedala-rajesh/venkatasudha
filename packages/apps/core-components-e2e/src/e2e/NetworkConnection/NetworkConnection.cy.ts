/// <reference types="cypress" />

describe('core-components: NetworkConnectionIcon component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=networkconnectionicon--basic'));

  it('should render the component', () => {
    cy.get('#iconContainer').children().should('have.length', 1);
  });
});
