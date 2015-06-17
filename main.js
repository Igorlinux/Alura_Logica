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
		
	}
	return alreadyRandomized;
}

var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function() {

	var inputs = document.getElementsByTagName('input');
	var right_numbers = [];
	var sena_numbers = senaNumbers();

	for(var i = 0; i < inputs.length; i++) {
		var input_atual = inputs[i];
		var input_atual_value = input_atual.value;
		
		if(sena_numbers[input_atual_value]) {
			right_numbers.push(input_atual_value);
		}

	}
	console.log("Voce acertou o(s) número(s): " + right_numbers);

});