# Tipos de Dados

* Gramática
  * Elementos de linguagem e suas combinações
  * A arte de falar e escrever corretamente

* Vocabulário
  * Conjunto de termos e expressões
  * Agrupamento de palavras

* Presisamos saber como escrever
* Presisamos saber os significados
* Precisamos continuar aprendendo, para crescer nosso vocabulário

Conforme o ECMAScript standard temos 9 tipos de dados:

## Data Types

* ***Primitive / Primitive value***
  * não é um objeto
  * seu valor é imutável
* ***Structural***
  * recebe atributos e / ou funcionalidades
  * geram outros tipos de dados derivados
* ***Structural Primitive***

### Primitivos

* String
* Number
* Boolean
* undefined
* Symbol
* BigInt

### Estruturais

* Object
  * Array
  * Map
  * Set
  * Date
  * ...
* Function

### Primitivo Estrutural

* null
  
----

## Como será a dinâmica?

* Conceito e escrita
* Vamos aprender os tipos de dados mais utilizados na linguagem
  
> Você sabia que é possível aprender 80% de um idioma ou linguagem de programação nova, com cerca de 20% do vocabulário ou até menos?

----

### STRINGS

* Cadeia de caracteres
* use aspas simples ou duplas em strings
* Crases: *template literals* ou *template string*. Permite interpolações (inclusão de expressões matemáticas) e multilinhas

```js
  console.log('Marcel')
  console.log("Marcel")
  console.log(`Marcel " ' "`)

  // interpolação
  console.log(`Marcel ${2+2}`)
  const name = "Marcel"
  console.log(`meu nome é ${name}`)
  
  console.log(`MArcel
  
  Marcel`)
```

### NUMBER

* 33 - inteiros
* 12.5 - reais ou float
* NaN - Not a Number
* Infinity - Infinito 

```js
  console.log(33)
  console.log(12.5)
  console.log(12.5 + 33)
  console.log(12.5 === Infinity) //Infinity
  console.log(NaN)
  
```

### BOLLEAN

* tipo de dado com somente dois valores: `true` ou `false`
* muito necessário dentro da lógica de programação

13.66

### UNDEFINED vs NULL

* *undefined*
  * indefinido (Ex: somar *number* com *string*)
  * algo que não existe
  
* *null*:
  * nulo
  * objeto que não possui nada dentro
  * diferente de indefinido

### OBJECT

* Dado do tipo estrutura estrutural
* propriedades / atributos
* funcionalidades / métodos
* `{ propriedade: "valor" }`

```js
console.log({
  name: "Marcel"
  idade: 32
  andar: function() {
    console.log('andar')
  }
})
```

### ARRAY

* uma lista
* agrupamento de dados
* forma: ["Marcel", 32] - colchetes

```js
console.log([
  "Leites",
  "Ovos",
  "Farinha"
])
```
