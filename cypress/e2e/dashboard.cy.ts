describe("dashboard", () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get("input[name='username']").type('henrique.souza');
    cy.get("input[name='password']").type('Henry123456');
    cy.contains("button", "Sign in").click();
  });

  it('should add user on the table', () => {
    cy.get('button').contains('Novo Usuário').click();
    cy.get("input[name='firstName']").type('Washington');
    cy.get("input[name='lastName']").type('James');
    cy.get("input[name='age']").type('10');
    cy.get('button').contains('Cadastrar').click();
    cy.contains('Washington').should('be.visible');
  });

  it('should remove one user on the table', () => {
    cy.get("button[data-testid='btn-delete']").first().click();
    cy.get('button').contains('Remover usuário').click();
    cy.contains('1').should('not.exist');
  });

  it('should edit user on the table', () => {
    cy.get("button[data-testid='btn-edit']").first().click();
    cy.get("input[name='firstName']").clear();
    cy.get("input[name='firstName']").type('Washington');
    cy.get('button').contains('Alterar').click();
    cy.contains('Washington').should('be.visible');
  });
})