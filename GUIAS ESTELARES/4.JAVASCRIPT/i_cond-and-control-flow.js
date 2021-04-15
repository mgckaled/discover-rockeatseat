// if.. else =============================================================
// Se a condicional for true entrar com o código de bloco adjacente

let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37.0;

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature){
  console.log('Febre Moderada')
} else {
  console.log(Saudável)
}

// switch ===============================================================

let expresion = 'a'

switch (expression) {
  case 'a':
    console.log('a');
    break
  case 'b':
    console.log('b');
    break
  default:
    console.log('default');
    break
}

function calculate (n1, operator, n2) {
  let result

  switch (operator) {
		case "+":
			result = n1 + n2;
			break;
		case "-":
			result = n1 - n2;
			break;
		case "*":
			result = n1 * n2;
			break;
		case "/":
			result = n1 / n2;
			break;
		default:
      console.log('não implementado');
			break;
	}
}

console.log(calculate(3, '*', 8))
console.log(calculate(3, "-", 8));

// throw ================================================
// throw -> disparar / jogar

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  console.log('depois do erro');
}

// try catch ================================================
// try --> tentar executar um código
// catch --> pegar ou capturar um erro, por exemplo

try {
  sayMyName('')
} catch (e) {
  console.log(e); // retorna o erro 
}