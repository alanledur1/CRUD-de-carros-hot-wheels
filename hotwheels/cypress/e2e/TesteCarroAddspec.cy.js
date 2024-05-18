it('Deve preencher e salvar um novo carro', () => {
  cy.visit('http://localhost:3000/addcar');

  // Preencher os campos do formulário
  cy.get('input[name="name"]').type('Meu Carro');
  cy.get('input[name="brand"]').type('Minha Marca');
  cy.get('input[name="color"]').type('Minha Cor');
  cy.get('input[name="year"]').type('2022');
  cy.get('input[name="imageUrl"]').type('https://example.com/image.jpg');

  // Clicar no botão "Salvar"
  cy.get('button[type="submit"]').should('exist').click();

  // Adicione verificações adicionais conforme necessário para garantir que o carro seja salvo com sucesso
});

it('Deve exibir mensagens de erro para campos obrigatórios', () => {
  cy.visit('http://localhost:3000/addcar');

  // Deixe um campo obrigatório em branco
  cy.get('input[name="name"]').clear(); // Limpa o campo de nome

  // Clicar no botão "Salvar"
  cy.get('button[type="submit"]').should('exist').click();

  // Verificar se as mensagens de erro são exibidas para os campos obrigatórios
  cy.get('input[name="name"]').should('have.attr', 'aria-invalid', 'true');
  cy.contains('Nome é obrigatório').should('exist');
});
