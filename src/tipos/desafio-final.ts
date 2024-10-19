type ContaCorrente = { 
  numero: number, 
  saldo: number, 
  movimentar: (valor: number) => void,
}

type Cliente = { 
  nome: string,
  email: string, 
  contas: ContaCorrente[],
}

{
  function movimentar (this: ContaCorrente, valor: number) {
    this.saldo += valor;
  }
}

const clientes: Cliente[] = {
  nome: 'Ana', 
  email: 'ana@zmail.com', 
  contas: [
    { numero: 1234, saldo: 0, movimentar},
    { numero: 6444, saldo: 350.33, movimentar}, 
  ]
}