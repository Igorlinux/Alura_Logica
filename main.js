function randomizedNumber() {
	var random_number = Math.floor(Math.random() * 60) + 1;
	return random_number;
}

function senaNumbers() {

	var alreadyRandomized = {

	};


	for (var i = 0; i < 6; i++) {

		var rdn_number = randomizedNumber();


		while (alreadyRandomized[rdn_number]) {

			rdn_number = randomizedNumber();

		}
		alreadyRandomized[rdn_number] = true;
		//sena_number.push(rdn_number);
		
	}

	return alreadyRandomized;
}


var x = senaNumbers();
console.log(x);