function generateSenaNumbers() {

	var sena_numbers = []; // CRIA UM ARRAY VAZIA

	for (var qtd = 6; qtd > sena_numbers.length; qtd--) { // LOOP PARA INCREMENTAR 6 VALORES NA ARRAY

		var random_number = Math.floor(Math.random() * 60); // VARIÁVEL QUE GUARDA UM NÚMERO RANDÔMICO DE 1 a 60

		if(random_number == 0) { // SE O NÚMERO FOR 0 FAZER:
			Math.random(this); // RANDOMIZA O VALOR DE NOVO
			qtd++;
		}
		else {
			sena_numbers.push(random_number); // SE O NÚMERO FOR DIFERENTE DE 0 ACRESCENTA O VALOR RANDÔMICA NA ARRAY sena_numbers
		}
	};

	return sena_numbers; // RETORNA A ARRAY COM OS 6 VALORES RANDÔMICOS
};

var mega_sena = generateSenaNumbers(); // PASSA A ARRAY GERADA PELA FUNÇÃO generateSenaNumbers PARA UMA VARIÁVEL

console.log(mega_sena);







/*var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function() {

	var ipts = document.getElementsByTagName('input'); //PEGAR TODOS OS INPUTS DO HTML

	var users_numbers = [];

	for(var contador = 0; contador < ipts.length; contador++) { //PERCORRER TODOS OS INPUTS

		var actual_number = ipts[contador].value; //PEGAR O VALOR DE TODOS OS INPUTS

		if(actual_number > 0 && actual_number <= 60) {

			users_numbers.push(actual_number);

		}
		else {

			alert("Não é permitido 0 nem números maiores que 60");
			return;
		}

	}


	for(var contador = 0; contador < users_numbers.length; contador++) { // PERCORRE A ARRAY

		users_numbers.sort(function(a,b) { // ORDENA A ARRAY
			return a-b;
		});

		var elemento_atual = users_numbers[contador]; // VARIÁVEL PRA PEGAR O VALOR ATUAL
		var elemento_anterior = users_numbers[contador - 1]; // VARITÁVEL PARA PEGAR O VALOR ANTERIOR

		if(elemento_atual == elemento_anterior) { // VERIFICA SE O VALOR ATUAL E O VALOR ANTERIOR SÃO IGUAIS

			alert("Não podem existir números iguais");
			return;

		};

	};


	var all_numbers = mega_sena.concat(users_numbers);


	for (var contador = 0, acertos = 0, numeros_acertados = []; contador < all_numbers.length; contador++) {

		all_numbers.sort(function(a,b) { // ORDENA A ARRAY
			return a-b;
		});

		var elemento_atual = all_numbers[contador]; // VARIÁVEL PRA PEGAR O VALOR ATUAL
		var elemento_anterior = all_numbers[contador - 1]; // VARITÁVEL PARA PEGAR O VALOR ANTERIOR

		if(elemento_atual == elemento_anterior) { // VERIFICA SE O VALOR ATUAL E O VALOR ANTERIOR SÃO IGUAIS

			acertos++;
			numeros_acertados.push(elemento_atual);

		};

	}
	if(acertos == 0) {
		alert("Você não acertou nenhum número");
	}
	else {
		alert("Você acertou " + acertos + " números. São eles: " + numeros_acertados);
	}
	console.log(mega_sena);
	

});*/