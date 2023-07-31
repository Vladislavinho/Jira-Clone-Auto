describe('Issue create', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
      //System will already open issue creating modal in beforeEach block  
      cy.visit(url + '/board?modal-issue-create=true');
    });
  });
it.only('My task 1 creating new issue', () => {
cy.get('[data-testid="modal:issue-create"]').within(() => {
cy.get('[data-testid="select:type"]').click()
cy.get('.sc-iqzUVk.cUBVJX').contains('Bug')
.trigger('click');
cy.get('input[name="title"]').click();
cy.get('input[name="title"]').type('Vlad')
.trigger('click');
cy.get('button[type="submit"]').click();
})
cy.get('[data-testid="modal:issue-create"]').should('not.exist');
cy.wait(2000) 
cy.contains('Issue has been successfully created.').should('be.visible');
cy.reload();
cy.contains('Issue has been successfully created.').should('not.exist');
cy.get('[data-testid="board-list:backlog').should('be.visible').and('have.length', '1').within(() => {
cy.get('[data-testid="list-issue"]').should('have.length', '5').first().find('p').contains('Vlad').click()
})
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


    })
  })







