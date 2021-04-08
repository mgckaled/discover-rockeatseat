var nameVar; // Declarar variável or declaration

// assignment and atribuição de valores
nameVar = "Mike";

// tipo de dado
console.log(typeof nameVar);

// agrupamento de declarações
let age, isHuman;
age = 18;
isHuman = true;

// Multiplos argumentos na função.
console.log(nameVar, age, isHuman);
console.log("O Mike tem 18 anos");
// Concatenando valores
console.log("o " + nameVar + " tem " + age + " anos.")
// interpolando valores
console.log(`o ${nameVar} tem ${age} anos.`)


// OBJECTS
const person = {
  name: 'Marcel',
  age: 30,
  weight: 92.6,
  isAdmin: true
}

console.log(person)
console.log(`Meu nome é ${person.name}, tenho ${person.age} anos. `);


// ARRAYS

const animals = [
  'Lion',
  'Monkey',
  'Cat'
]
// acessar valores
console.log(animals[1])
console.log(animals);




