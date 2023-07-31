describe('Issue comments creating, editing and deleting', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
        cy.visit(url + '/board');
        cy.contains('This is an issue of type: Task.').click();
      });
    });
  
    it('Estimation Task', () => {
      cy.get('[data-testid="modal:issue-details"]').should('be.visible').within(() => {
     // Write estimation
        cy.get('input[placeholder="Number"]').clear().should('have.attr', 'value', '')
        cy.get('input[placeholder="Number"]').type('10')
        cy.contains('10h estimated', { timeout: 10000 }).should('be.visible')
        cy.get('[data-testid="icon:close"]').first().click()
        cy.get('[data-testid="modal:issue-details"]').should('not.exist')
      });
  
      cy.get('[data-testid="board-list:backlog"]').should('be.visible')
      cy.get('[data-testid="list-issue"]').first().click()
      cy.get('input[placeholder="Number"]').should('have.value', '10');
     // Edit estimation
      cy.get('input[placeholder="Number"]').clear().type('7')
      cy.contains('7h estimated', { timeout: 10000 }).should('be.visible')
      cy.get('[data-testid="icon:close"]').first().click()
      cy.get('[data-testid="modal:issue-details"]').should('not.exist')
      cy.get('[data-testid="board-list:backlog"]').should('be.visible')
      cy.get('[data-testid="list-issue"]').first().click();
      cy.get('input[placeholder="Number"]').should('have.value', '7')
      .clear()
      .trigger('click')
     // Delete estimation
      cy.get('[data-testid="icon:close"]').first().click()
      cy.get('[data-testid="modal:issue-details"]').should('not.exist')
      cy.get('[data-testid="board-list:backlog"]').should('be.visible')
      cy.get('[data-testid="list-issue"]').first().click()
      cy.get('input[placeholder="Number"]').should('have.attr', 'value', '')

    });
  });




