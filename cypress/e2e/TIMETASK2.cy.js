
describe('Issue create', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
      //System will already open issue creating modal in beforeEach block  
      cy.visit(url + '/board?modal-issue-create=true');
    });
  });
  
  
  const getIssueModal = () => cy.get('[data-testid="modal:issue-create"]');
  
  
  it.only('My task 1 creating new issue', () => {
getIssueModal().within(() => {
cy.get('[data-testid="icon:plus"]').click();
 cy.get('[data-testid="select:type"]').click();
 cy.get('.sc-iqzUVk.cUBVJX').contains('Bug')
.trigger('click');
        
 cy.get('input[name="title"]').click();
 cy.get('input[name="title"]').type('Vlad')
.trigger('click');
     
cy.get('button[type="submit"]').click();
    })
cy.get('[data-testid="modal:issue-create"]').should('not.exist');
cy.contains('Issue has been successfully created.').should('be.visible');

   
cy.reload();
cy.contains('Issue has been successfully created.').should('not.exist');

    
cy.get('[data-testid="board-list:backlog').should('be.visible').and('have.length', '1').within(() => {
       
 cy.get('[data-testid="list-issue"]')
.should('have.length', '5')
.first()
.find('p')
.contains('Vlad')
.click()
cy.reload();
cy.get('[data-testid="modal:issue-details"]').should('be.visible').within(() => {

})
})
  })





});
