// GASTOS FAMILIARES

let family = {
	incomes: [2500, 3200, 250.43, 360.45],
	expenses: [320.34, 128.45, 176.87, 1450.0],
};

function sum(array) {
	let total = 0;

	for (let value of array) {
		total += value;
	}

	return total;
}

function calculateBalance() {
	const calculateIncomes = sum(family.incomes);
	const calculateExpenses = sum(family.expenses);
	const total = calculateIncomes - calculateExpenses;
	const itsOk = total >= 0;

	let balanceText = "negativo";
	let minusSignal = "-";

	if (itsOk) {
		balanceText = "positivo";
		minusSignal = "";
	}

	console.log(
		`Seu saldo é ${balanceText}: ${minusSignal} R$${Math.abs(total.toFixed(2))}`
	);
	// Math.abs() = valores absolutos
	// toFixed() = fixar números depois da casa decimal
}

calculateBalance();
