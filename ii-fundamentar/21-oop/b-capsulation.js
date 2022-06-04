class Poligono {
  // passar propriedades dentro da função constructor
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  // "#" restringe o acesso ao método
  get area() {
    return this.#calcularArea()
  }

  #calcularArea() {
    return this.altura * this.largura
  }
}

let poligono = new Poligono(50, 60)
console.log(poligono)
console.log(poligono.altura)
console.log(poligono.largura)
console.log(poligono.area)
