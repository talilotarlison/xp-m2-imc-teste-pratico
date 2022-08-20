function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
 
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);

  var formattedImc = imc.toFixed(2);
	grauDeObsidade(formattedImc);
	console.log(formattedImc);

  imcResult.textContent = formattedImc;
   
}


function grauDeObsidade(formattedImc){
	/*const result = document.getElementById('mostrar');*/
	var resultado = document.querySelector('#mostrar');
	if((formattedImc <= 18.5)) {
        console.log("Índice de IMC abaixo de 18.5, caracteriza magreza.");
	resultado.textContent = "Índice de IMC abaixo de 18.5, caracteriza magreza."
    } else if((formattedImc > 18.5) && (formattedImc <= 24.9)) {

        console.log("Parabéns! Índice de IMC entre 18.5 E 24.9, é considerado normal");
		resultado.textContent = 'Parabéns! Índice de IMC entre 18.5 E 24.9, é considerado normal'
		/*result.innerHTML = 'Parabéns! Índice de IMC entre 18.5 E 24.9, é considerado normal'*/
		
    }  else if((formattedImc > 25) && (formattedImc <= 29.9)) {
	resultado.textContent = "Atenção! Índice de IMC entre 25 e 29.9, caracteriza sobrepeso"
        console.log("Atenção! Índice de IMC entre 25 e 29.9, caracteriza sobrepeso");
    }   else if((formattedImc > 30) && (formattedImc <= 34.9)) {
		resultado.textContent = "Pense em procurar um médico. Índice de IMC entre 30 e 34.9, caracteriza obesidade I"
        console.log("Pense em procurar um médico. Índice de IMC entre 30 e 34.9, caracteriza obesidade I");

    } else if((formattedImc > 35) && (formattedImc <= 39.9)) {
resultado.textContent = "Vá ao médico! Índice de IMC entre 35 e 39.9, caracteriza obesidade II"
    console.log("Vá ao médico! Índice de IMC entre 35 e 39.9, caracteriza obesidade II");
    }	
}

start();



