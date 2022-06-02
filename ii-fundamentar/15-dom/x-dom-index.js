// ===== Selecionando Elemntos =======================
// getElementById()
const element = document.getElementById('blog-title')
console.log(element)

// getElementsByClassName()
const element_2 = document.getElementsByClassName('one')
console.log(element_2)

// getElementsByTagName()
const element_3 = document.getElementsByTagName('meta')
console.log(element_3)

// querySelector()
const element_4 = document.querySelector('[src]')
console.log(element_4)

// querySelectorAll()
const element_5 = document.querySelectorAll('.one')
console.log(element_5)

// nodelist aceita manipulação
element_5.forEach(el => console.log(el))

// ===== Manipulando Conteúdos =======================
//textContent
const content = document.querySelector('h1')
content.textContent += ' - Olá Devs!'
console.log(content.textContent)

// innerText => trocar o texto interno do HTML
const content_2 = document.querySelector('.text-1')
content_2.innerText = 'Meu texto'

// innerHTML => trocar o conteúdo HTML interno (tags)
// adiciona um elemento dentro do conteúdo HTML
const content_3 = document.querySelector('.text-2')
content_3.innerHTML = 'texto pequeno <b>em negrito</b>'

// value => inserir ou mostrar o valor preenchido no HTML através do JS
const content_4 = document.querySelector('#input-1')
content_4.value = 'Marcel Kaled'
const content_5 = document.querySelector('#input-2')
console.log(content_5.value)

// Manipular atributos
//add
const header = document.querySelector('header')
header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
console.log(headerID)
console.log(headerID.getAttribute('id'))
//remove
const section = document.querySelector('.section')
section.removeAttribute('class')
console.log(section)

// ===== Alterando estilos =======================
const bodyStyle = document.querySelector('body')
bodyStyle.style.backgroundColor = '#f9f3d2'
console.log(bodyStyle.style.backgroundColor)

// classList
const classList = document.querySelector('body')
console.log(classList.classList)

classList.classList.add('active', 'green')
//classList.classList.remove('active')
classList.classList.toggle('active')

// ===== Navegando pelos elementos =======================
const navi_element_1 = document.querySelector('body')
const navi_element_2 = document.querySelector('h1')
//mostra o elemento pai -> <html>
console.log(navi_element_1.parentNode)
console.log(navi_element_2.parentElement)

// childNodes children
const el = document.querySelector('header')
console.log(el.childNodes) // (nodelist)
console.log(el.children) // (HTMLCollection)

// firstChild firstElementChild
console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)

// nextSibling nextElemntSibling
console.log(el.nextSibling)
console.log(el.nextElementSibling)

// previousSibling previousElemntSibling
console.log(el.previousSibling)
console.log(el.previousElementSibling)

// ===== Criando e adicionando elementos =======================
const newP_1 = document.createElement('p')
const newP_2 = document.createElement('p')
newP_1.innerHTML = 'element created by DOM  - append'
newP_2.innerHTML = 'element created by DOM  - prepend'

//append - prepend
const elementDiv = document.querySelector('div')
elementDiv.append(newP_1)
elementDiv.prepend(newP_2)


// ===== Eventos ======================================
function print() {
  console.log('print')
}

function dbprint() {
	console.log('double print')
}

//Eventos de teclado
const input = document.querySelector('input')
input.onkeydown = function() {
  console.log('rodei')
}

// Events pelo JS
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

// event
input.onkeydown = function(event) {
  console.log(event.key)

}




