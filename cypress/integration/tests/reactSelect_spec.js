import 'cypress-react-selector';

describe('react-select tests', function() {
    it('Inputs from react-select have been filled', function() {
      var cypressPage = 'http://localhost:3000'
      cy.visit(cypressPage)
      cy.url().should('include', cypressPage);
     
    })
  })

  describe('It should validate cypress react selector', () => {
    before(() => {
      cy.visit('https://ahfarmer.github.io/calculator/');
      cy.waitForReact();
    });
  
    it('it should validate react selection with wildcard', () => {
      cy.react('*', { name: '9' }).should('have.text', '9');
    });
  
    it('it should validate react chaining', () => {
      cy.react('t', { name: '5' }).react('button').should('have.text', '5');
    });
  
  });