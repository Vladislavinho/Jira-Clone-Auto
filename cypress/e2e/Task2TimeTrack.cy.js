describe('Issue create', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
        });
    });
    const getIssueCreateModal = () => cy.get('[data-testid="modal:issue-create"]');
    it('My task 1 creating new issue', () => {
    
    getIssueCreateModal().within(() => {
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

})
})
    const getIssueDetailsModal = () => cy.get('[data-testid="modal:issue-details"]');
    it('Estimation Task', () => {
        const lionelmessi = '10';
        const penaldo = '7';
        const NumberPlaceHolder = cy.get('input[placeholder="Number"]');

        getIssueDetailsModal().within(() => {
            //Write estimation
            NumberPlaceHolder.click().clear()
            NumberPlaceHolder.type(lionelmessi);
            cy.get('input[placeholder="Number"]').should('have.value', lionelmessi);
            //Edit estimation
            NumberPlaceHolder.click().clear()
            NumberPlaceHolder.type(penaldo);
            cy.get('input[placeholder="Number"]').should('have.value', penaldo);
            //Remove estimation
            NumberPlaceHolder.click().clear()
            cy.get('input[placeholder="Number"]').should('have.attr', 'value', '');
        })
    })
})