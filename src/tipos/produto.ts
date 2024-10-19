type Produto = {
  nome: string, 
  preco: number, 
  desconto: number, 
  precoComDesconto: () => number
}

let produto: Produto = {
  nome: 'Vestido para casamento', 
  preco: 279.90, 
  desconto: 0.1, 
  precoComDesconto () {
    return this.preco * (1 - this.desconto);
  }
}

console.log(produto.nome); 
console.log(produto.precoComDesconto()); 