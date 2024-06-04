//let para calcula valor total somando cada subtotal.
let totalGeral;

//Inicia a pagina apagando esse valores de exemplo
limpar();

//função ativas ao click do botão
function adicionar() {
  // 1- Pegar os dados informados: qual o produto escolhido, qual a quantidade e qual o valor.
  let produto = document.getElementById('produto').value;

  //split transforma uma string em partes partindo de uma referência apos escolher um indece
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;

  // 2-Calcular o preço e subtotal;
  let preco = quantidade * valorUnitario;

  // 3-Adicionar no carrinho;
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto}Celular <span class="texto-azul">R$${preco}</span></section>`
  
  //chama a let com seu valor atual e soma o valor próximo item adcionado e injeto o como texto na campo total
  totalGeral = totalGeral + preco;
  
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent=`R$ ${totalGeral}`;

  //zera o campo unidade do item adicionado
  document.getElementById('quantidade').value = 1;
  // 4- Atualizar o preço total;    
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML= '';
  document.getElementById('valor-total').textContent= 'R$ 0';
  document.getElementById('quantidade').value = 1;
}