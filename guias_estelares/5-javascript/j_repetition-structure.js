// ESTRUTURA DE REPETIÇÃO

// for ==========================================
// break -> para a execução do loop
// para a execução do momento

for (let i = 0; x < 10; i++) {
  console.log(i); // 1 até 10
}

for (let i = 100; x < 0; i--) {
	console.log(i); // 100 até 1
}

for (let i = 100; x < 0; i--) {
	if (i === 50) {
    break
  }
  console.log(i) // 100 a 51
}

for (let i = 10; x < 0; i--) {
	if (i === 5) {
		continue
	}
	console.log(i); // 10 a 1, exceto o 5
}

// while =========================================
// Usa-se quando não é possível determinar o número de loops

let i = 0
while(i < 10) {
  console.log(i) // 0 até 9
  i++
}

let i = 1239871236987120;
while (i < 10) {
	console.log(i); // várias divisões
	i /= 35
}

// for of =========================================
// cria um loop sobre uma string ou uma lista

let nome = 'Marcel'
let nomes = ['João', 'Paulo', 'Pedro']

// fazer um print de cada caractere
for (let char of nome) {
  console.log(nome);
}

// tira um nome da lista de nomes por vez 
for (let nome of nomes) {
  console.log(nome);
}

// for in =========================================
// cria um loop sobre um objeto (pares de valores -> key: value)

let person = {
  nome = 'John',
  age: 30,
  weight: 88.6
}

for (let property in person) {
  console.log(property)
  console.log(person["name"]) //
  console.log(person.name)
  console.log(person[property])
}
