// function Scope

let subject = 'Create Video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject)) //study
console.log(subject) // Create Video

