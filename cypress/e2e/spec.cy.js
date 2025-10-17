describe('template spec', () => {
  it('Get, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fake@gmail.com')
    
    cy.get('.action-email').should('have.value', 'fake@gmail.com')
  })
})