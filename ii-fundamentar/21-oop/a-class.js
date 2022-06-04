// toda Classe em JS é um protótipo
class Pessoa {
  constructor(nome) {
    this.id = ~~(Math.random() * 100000)
    this.nome = nome
  }
  callName() {
    console.log(this.nome)
  }
}

const person = new Pessoa('Marcel')
person.callName()
console.log(person.id)

