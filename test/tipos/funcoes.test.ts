import { multiplicar, saudacao } from "../../src/tipos/funcoes";

test('Deve retornar uma saudacao baseada na hora atual', () => {
  const s = saudacao('Grazielle'); 
  expect(s).toBe('Ola, passar bem Grazielle!')
});

test('Deve realizar de forma correta a multiplicação de dois números', () => {
  const resultado = multiplicar(4,5); 
  expect(resultado).toBe(20); 
})