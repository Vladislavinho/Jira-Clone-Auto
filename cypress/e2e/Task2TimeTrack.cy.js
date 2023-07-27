describe('Issue comments creating, editing and deleting', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
            cy.visit(url + '/board');
            cy.contains('This is an issue of type: Task.').click();
        });
    });
    const getIssueDetailsModal = () => cy.get('[data-testid="modal:issue-details"]');
    it.only('Should create a comment successfully', () => {
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
