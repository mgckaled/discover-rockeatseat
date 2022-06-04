// Passo 1: Modelando
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }

  push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop() {
    if (this.top < 0) return undefined 
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  } 

  

  peek() {
    return this.top >=0 ? this.data[this.top] : undefined
  }
}

const stack = new Stack()

//Adicionar
stack.push('learning')
stack.push('data')
console.log(stack.push('stuctures'))

console.log(stack.peek())

// Remover

stack.pop()
console.log(stack.pop())
console.log(stack.peek())
