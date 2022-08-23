import { getGreeting, getIconText } from '../support/app.po';

describe('portfolio-client', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
    cy.visit('/')
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to Home Page');
    getIconText().contains("RK");

    cy.get('a[href*="education"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/education')

    // The new page should contain an h1 with "About page"
    getGreeting().contains('Welcome to Education Page');
  });
});
