// Notas escolres

function getScore(nome, score) {

  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score < 90
	let scoreC = score >= 70 && score < 80
	let scoreD = score >= 60 && score < 70
	let scoreF = score < 60 && score >= 0

	let scoreFinal;
	if (scoreA) {
		scoreFinal = "A"
	} else if (scoreB) {
		scoreFinal = "B"
	} else if (scoreC) {
		scoreFinal = "C"
	} else if (scoreD) {
		scoreFinal = "D"
	} else if (scoreF) {
		scoreFinal = "F"
	} else {
		scoreFinal = "Inválida"
	}

  let sOrP
  if (score === 0 || score === 1) {
    sOrP = 'ponto'
  } else {
    sOrP = 'pontos' 
  }
  
	console.log(`${nome}, você fez ${score} ${sOrP} - Nota ${scoreFinal}.`)
}

getScore('Marcel', 72)
getScore('Asdrubal', 87);
getScore('Fulano', 101);
getScore('Ciclano', 0);
getScore('Beltrano', 1);
getScore("Fred", -1);
getScore('Fernanda', 45);
getScore('Ailton', 69);
getScore('Lucas', 94);


