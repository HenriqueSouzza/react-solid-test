describe("steps user auth", () => {
  it('should do sign out', () => {
    cy.visit('/login');
    cy.get("input[name='username']").type('henrique.souza');
    cy.get("input[name='password']").type('Henry123456');
    cy.contains("button", "Sign in").click();
    cy.contains("button", "Sair").click();
  });

  it('should redirect to login if user is unlogged', () => {
    cy.visit('/dashboard');
    cy.location('pathname').should('eq', '/dashboard');
  });
})