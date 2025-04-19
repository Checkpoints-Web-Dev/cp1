// QUESTÃO 1

let var1;
console.log(var1);

let var2 = null;
console.log(var2);

let var3 = "Variável com valor";
console.log(var3);

// QUESTÃO 2

let num1 = 10;
let num2 = 67;

console.log(num1 != num2); // Diferente
console.log(num1 == num2); // Igual
console.log(num1 >= num2); // Maior ou igual
console.log(num1 <= num2); // Menor ou igual
console.log(num1 > num2); // Maior
console.log(num1 < num2); // Menor
console.log(num1 !== num2); // Diferente e tipo
console.log(num1 === num2); // Igual e verifica o tipo

// QUESTÃO 3

let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));

let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

switch (true) {
  case imc < 18.5:
    console.log("Você está abaixo do peso.");
    break;
  case imc <= 24.9:
    console.log("Você está no peso ideal.");
    break;
  case imc > 24.9:
    console.log("Você está acima do peso.");
    break;
  default:
    console.log("Erro ao classificar o IMC.");
}
