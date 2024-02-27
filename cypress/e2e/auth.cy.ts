describe("steps user auth", () => {
  it('should do sign out', () => {
    cy.visit('/dashboard');
    cy.location('pathname').should('eq', '/dashboard')
    cy.get("button").first().click();
    cy.location('pathname').should('eq', '/login')
  });

  it('should do sign in', () => {
    cy.visit('/login');
    cy.get("input[name='username']").type('henrique.souza');
    cy.get("input[name='password']").type('Henry123456');
    cy.get("button").click();
    cy.location('pathname').should('eq', '/dashboard')
  });
})