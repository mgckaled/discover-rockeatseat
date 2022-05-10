# Expressões e Operadores

### ***Expressions***

### ***Operators***
- Binary
- Unary
- Ternary

---

## 1. New
- Left-hand expresions
- criar um novo objeto
- este objeto irá apresentar um cadeia de protótipos, conforme seu tipo de dado

```js
let namee = new String('Marcel')
let age = new Number(23)
let date = new Date('2020-12-01')
console.log(namee, age, date)
```

## 2. Operadores Unários (Typeof Delete)

- `typeof` - verificar o tipo de dado
- `delete` - deletar

```js
const person = {
  name: "Marcel",
  age: 25,
}

delete person.age

console.log(person)
```

## 3. Operadores Aritiméricos
* multiplicação - `3.2 * 5.5`
* divisão - `12 / 2`
* soma - `1 + 1` 
* subtração - `10 - 5` 
* resto da divisão - `11 % 9`
* incremento - `++`
* decremento - `--`
* exponenciação - `**` 

## 4. Operadores de comparação
>Faz comparação de valores e
>retorna um Boolean como resposta

- `==` igual
- `!=` diferente
- `===` estritamente igual (compara tipo de dado)
- `!==`estritamente diferente (compara tipo de dado)
- `>` maior
- `>=` maior ou igual
- `<` menor ou igual
- `<=`menor or igual

## 5. Operadores de atribuição (Assignment)
- assignmet `x = 1`
- addition assignment `x += 2`
- subtraction assignment `x -= 1`
- multiplication assignment `x *= 2`
- division assignment `x /= 3`

## 6. Operadores Lógicos

- AND `&&` 
- OR `||`
- NOT `!`

```js
let pao = true
let queijo = true
let cafe = false
let bolacha = false

console.log(pao && queijo) // true
console.log(pao && cafe) // false
console.log(pao || queijo) // true
console.log(pao || cafe) // true
console.log(cafe || bolacha) // false
console.log(!cafe) // true
console.log(!pao) // false
```

## 7. Operador condicional ternário

- Dependendo da condição, nós receberemos valores diferentes
- Condição entre valor 1 se não, valor 2
- ` { condition ? value1 : value2 }`
- Exemplos

```js
const niceBreakfast = pao && queijo ? 'Top' : "Bad" //Top
```

## 8. Operadores para String
- Comparison (comparação)

- Concatenation (concatenação)


## 9. Falsy and Truthy

## 10. Precedência dos Operadores
  



