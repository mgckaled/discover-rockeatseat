const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

console.log(pilotos[0])
console.log(pilotos[2])
console.log(pilotos[3])

// acessar o tamanho do array
console.log(pilotos.length)

//iterável
for (let piloto of pilotos) {
  console.log(piloto)
}

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// deletar um elemento
// splice (a partir do elento <n>, deletar <n> elementos)
pilotos.splice(1, 1)
console.log(pilotos)
