# 🌼 Typescript: Formação Dev
## ✨ Programação Orientada a Objetos
- Objetos
- Classes
- Atributos
- Métodos 

**Pilares da Orientação a Objetos**: 
- Encapsulamento
- Herança 
- Polimorfismo

## Iniciando o Typescript
```js
npm init - y
```

```js
deno run src/index.html
```

**Instalando dependências do node**: 
```js
npm i -y
npm i -D typescript ts-node-dev
npx tsc --init
npm run build
node dist/index.js
```

**Instalando dependências para os testes**
```js
npm i -D jest ts-jest

// Em jest.config.ts: 
module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'node', 
}

// Instalar dependência de jest
npm i -D @types/jest @types/node

// Instalar dependência para um id único
npm i uuid @types/uuid
```

## ✨ Usando Tipos
###  ✏︎ Variáveis
```js
console.log('Variaveis'); 

// string
let nome: string = "João"; 
console.log(nome); 

//boolean
let estaChovendo: boolean; 
estaChovendo = true; 
console.log(estaChovendo); 

// number
let numero: number = 30; 
console.log(numero); 
numero = 32; 
console.log(numero); 


// tipo any
let variavel : any = 4; 
variavel = 'Texto'; 
variavel = 32; 
variavel = { nome: 'João'}; 
console.log(variavel); 
```


### ✏︎ Arrays
```js
// do tipo string e do tipo number
let hobbies: any[] = ['Cozinhar', 'Praticar esportes', 123]; 
console.log(hobbies[0]); 
console.log(typeof hobbies); 
```

```js
const endereco: [string, number] = ["Grazielle Café", 30]; 
console.log(endereco); 
```