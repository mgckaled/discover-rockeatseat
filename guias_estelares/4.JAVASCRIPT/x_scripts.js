


let namee = new String('Marcel')
let age = new Number(23)
let date = new Date('2020-12-01')
console.log(namee, age, date)

const person = {
  name: "Marcel",
  age: 25,
}

delete person.age

console.log(person)

let increment = 0
increment++


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

const niceBreakfast = pao && queijo ? 'Top' : "Bad" //true