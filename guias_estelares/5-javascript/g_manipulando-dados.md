# Manipulando Dados

## 1. Prototypes
- JS é uma linguagem baseada em prototipo - *prototype-based*
- *prototype-chain* - cadeia de funcionalidades 
- `__proto__`
- basta inserir `{}`. Este representa um objeto
- A maioria dos tipos de dados são encapsulados por um objeto, ou seja, vão herdar toda a cadeia de protótipo (funcionalidades comuns e específicas, conforme tipo de dado). Com um `.` ponto na frente do dado é possível acessar diversos atributos ou métodos.

```js
"devmgck".__proto__
23.0.__proto__
true.__prototype__
```

## 2. Type Conversion & Coersion

### *Type Conversion* (typecasting)
- capacidade de realizar um troca <br>
`console.log(Number('9') + 5)  // = 14`

### *Type Coersion* 
- capacidade de forçar um troca <br>
`console.log('9' + 5)  // = 95`


## 3. Manipulando Strings e Números

```js
// Transformando strings em números e vice-versa
let string = "123"
Number(string)
let number = 321
String(number)
```
```js
// Contando carcteres...
let word = "paralelepípedo"
word.length // 14
let number = 1234
String(number).length // 4
```

```js
// transformar um número quebrado com 2 casas 
// decimais e trocar ponto e vírgula
let n = 2131.231123123
console.log(n.toFixed(2)) // 2131.23
console.log(n.toFixed(2).replace(".", ",")) // '2131.23'
```

```js
// mudar string para maiúscula ou minúscula
let w = "Programar é muito bacana"
console.log(w.toLocaleLowerCase()) // minúsculo
console.log(w.toUpperCase()) // maiúsculo
```

```js
// encontra palavra em uma frase
let phrase_1 = "Eu quero viver" 
let phrase_2 = "Eu quero viver o amor"
let phrase_3 = "Eu quero viver o Amor"
console.log(phrase_1.includes('Amor')) // false
console.log(phrase_2.includes('Amor')) // false (case sensitive)
console.log(phrase_3.includes('Amor')) // true
```
```js
// incluir underscore entre as palavras
let text = "Eu quero viver o Amor!"
let myArray = text.split(" ") // arrays de palavras
let textWithUnderscore = myArray.join("_") 
console.log(textWithUnderscore.toLowerCase())
// todas minúsculas separadas por underscore
```

```js
// criar array com construtor
let array_1 = ['a', 'b', 'c']
let array_2 = new Array('a', 'b', 'c')
console.log(array_2)
```

```js
// transformar uma cadeia de caracteres em elementos de um array
let x = "manipulacao"
console.log(Array.from(x))
```

```js
let techs = ['html', 'css','js' ]
// adicionar um item no fim
techs.push('node.js')
// adicionar no começo
techs.unshift('sql')
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos array
console.log(techs.slice(1,3))
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1,2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css') // 2
techs.splice(index,1)
```
