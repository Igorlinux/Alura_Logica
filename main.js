
/*var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function() {
	var ipts = document.getElementsByTagName('input'); //PEGAR INPUT

	for(var contador = 0, users_numbers = []; contador < ipts.length; contador++) { //PERCORRER TODOS OS INPUTS
		var actual_number = ipts[contador].value; //PEGAR O VALOR DE TODOS OS INPUTS

		if(actual_number > 0 && actual_number <= 60) {

			users_numbers.push(actual_number);

		}
		else {
			alert("Você só pode digitar números entre 0 e 60.");
			return;
		}

	}

	console.log(users_numbers);
	
});*/











/*for (var qtd = 12, sena_numbers = []; qtd > sena_numbers.length; qtd--) {
	var random_number = Math.floor(Math.random() * 60);

	if(random_number == 0) {
		Math.random(this);
	}
	else {
		sena_numbers.push(random_number);
	}
}

console.log(sena_numbers);*/




for (var qtd = 12, sena_numbers = []; qtd > sena_numbers.length; qtd--) {
	var random_number = Math.floor(Math.random() * 60);
	
	if(random_number != 0) {
		sena_numbers.push(random_number);
		sena_numbers.sort(function(a,b) {
			return a-b;
		});
	}
	else {
		Math.random(this);
	}
}

console.log(sena_numbers);
