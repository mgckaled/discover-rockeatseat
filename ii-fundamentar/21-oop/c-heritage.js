class Vehicle {
  tires = 4
  
  move(direction)
  turn(direction)
}

class Moto extends Vehicle {
  constructor () {
    super() // "resgatar" atributos e métodos do pai
    this.tires = 2
  }
}