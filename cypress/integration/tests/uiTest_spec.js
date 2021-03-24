describe('Cypress.io tests', function() {
    it('Open localhost page', function() {
      var cypressPage = 'http://localhost:3000'
      cy.visit(cypressPage)
      cy.url().should('include', cypressPage);
    })
  })