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
const lionelmessi = '10';
const penaldo = '7';
const NumberPlaceHolder = cy.get('input[placeholder="Number"]');
cy.get('[data-testid="modal:issue-details"]').should('be.visible').within(() => {
//Write estimation
NumberPlaceHolder.type(lionelmessi)
.trigger('click');
cy.get('[data-testid="icon:close"]').click();
})
cy.get('[data-testid="board-list:backlog"]').should('be.visible');
cy.get('[data-testid="list-issue"]').first().click();
cy.get('input[placeholder="Number"]').should('have.value', lionelmessi);
//Edit estimation
 cy.get('input[placeholder="Number"]').clear();
NumberPlaceHolder.type(penaldo);
cy.get('input[placeholder="Number"]').should('have.value', penaldo);
//Remove estimation
NumberPlaceHolder.click().clear()
cy.get('input[placeholder="Number"]').should('have.attr', 'value', '');



    })
  })







