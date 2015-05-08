function randomizedNumber() {
	var random_number = Math.floor(Math.random() * 60) + 1;
	return random_number;
}

function senaNumbers() {

	for (var i = 0, sena_number = []; i < 6; i++) {

		var rdn_number = randomizedNumber();
		sena_number.push(rdn_number);
	}

	return sena_number;
}

var x = senaNumbers();

console.log(x);