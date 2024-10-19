type Usuario_2 = { nome: string, email: string }

const usuarios: Usuario_2[] = [
  {nome: 'Pedro', email: 'pedro@zmail.com'},
  {nome: 'Amanda', email: 'amanda@zmail.com'},
  {nome: 'Fernanda', email: 'fernanda@zmail.com'},
  {nome: 'Viola', email: 'viola@zmail.com'},
  {nome: 'Rafael', email: 'rafael@zmail.com'},x
  {nome: 'roger', email: 'roger@zmail.com'}, 
]

function buscarPorEmail(email: string): Usuario_2 | null{ 
  return usuarios.find(u => u.email === email) ?? null; 
}

console.log(buscarPorEmail("pedro@zmail.com")); 