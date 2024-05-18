describe('CarroEdit', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/cars/12'); 
    });
  
    it('Deve preencher e salvar um carro editado', () => {
      // Preencher os campos do formulário
      cy.get('input[name="name"]').clear().type('BMW E30 M3');
      cy.get('input[name="brand"]').clear().type('BMW');
      cy.get('input[name="color"]').clear().type('preto');
      cy.get('input[name="year"]').clear().type('1990');
      cy.get('input[name="imageUrl"]').clear().type('https://www.minimundi.com.br/cdn/imagens/produtos/original/miniatura-carro-bmw-e30-m3-gr-a-1990-rallye-ypres-5-1-18-solido-s1801519.jpg');
  
      // Clicar no botão "Salvar"
      cy.get('button').contains('Salvar').click();
  
      // Verificar se a página foi redirecionada para a lista de carros após salvar
      cy.url().should('eq', 'http://localhost:3000/list');
    });
  });
  