# Typescript

## O que é?

Typescript foi desenvolvido pela Microsoft com o objetivo de trazer um superset (linguagem de programação) de tipagens para o Javascript

A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript.

As tipagens são importantes para mantermos a consistência das aplicações e para facilitar processos de depuração. A própria IDE vai auxilar no _autocomplete_ das tipagens.

Por trás do panos, todo o código será compilado para Javascript para um versão que será compreendida para qualquer tipo de projeto.

O Typescript permite uma adoção gradual, não sendo necessário tipar todo o código.

## Propriedades

### Tipagem explícita

Declara-se o tipo de dado de forma clara.

### Any

Por padrão, no Typescript, uma variável é do tipo `any` quando você não diz pra ela qual é o tipo de forma explícita.

`any` literalmente vai aceitar qualquer tipo de Tipagem.

Seu uso não recomendado, pois se perde a essencia do Typescript.

### Inferência de tipos

O typescript reconhece automaticamenteo tipo de variável ao passar algum valor pra ela.

### Tipos Primitivos

- `boolean`
- `string`
- `number`
- `any`

### Matrizes

- `[]`
  - `number[]`
  - `string[]`
- `Array<>`
  - `Array<string>`
  - `Array<number>`

### Funções

Uma função pode ter ou não um retorno. Quando não há, ela é do tipo `void`

Já quando tem um retorno, a tipagem é inferida automaticamentena função.

### Unions

O Operador Union, representado pelo _pipe_ `|` nos permite adicionar mais de um tipo de variável

### Generics

O _generic_ no Typescript nos permite reutilizar uma determinada implementação de código, de forma rápida. Para representar um _generic_ nós declaramos ele dessa forma `<T>` (podendo ser utilizado qualquer outra letra).

As conveções existentes são:

- `<S>` => Representando **State**
- `<T>` => Representando **Type**
- `<K>` => Representando **Key**
- `<V>` => Representando **Value**
- `<E>` => Representando **Element**

### Type

Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.

### Type Assertions

Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um `type` informando quais são as propriedades desse objeto.

### Objetos

Os objetos podem ser criados dentro do próprio tipo. Dessa forma, as propriedades são vinculadas ao objeto, facilitando a vinculação de tipagem ao objeto.

Considere sempre criar tipos com letra maiúscula

### Opcional

Para informarmos que uma propriedade é opcional inserimos o sinal de `?`.

### Interseção de tipos

União de dois ou mais tipos de suas propriedades dentro de um objeto, através do caractere `&`.

### Interface

Forma alteranativa de criação de tipos

keyword: `interface`. Não é nessessário colocar o sinal de `=`

### Type e Interface

O objetivo de ambos serve para definir tipagens no TypeScript. O `type` é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já a `irterface` são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.
