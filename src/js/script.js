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

// let peso = parseFloat(prompt("Digite seu peso (kg):"));
// let altura = parseFloat(prompt("Digite sua altura (m):"));

// let imc = peso / (altura * altura);

// console.log(`Seu IMC é: ${imc.toFixed(2)}`);

// switch (true) {
//   case imc < 18.5:
//     console.log("Você está abaixo do peso.");
//     break;
//   case imc <= 24.9:
//     console.log("Você está no peso ideal.");
//     break;
//   case imc > 24.9:
//     console.log("Você está acima do peso.");
//     break;
//   default:
//     console.log("Erro ao classificar o IMC.");
// }

// QUESTÃO 4

for (let i = 1; i <= 50; i++) {
  console.log(`O valor é: ${i}!`);
}

// QUESTÂO 7

let nome = "Pedro";
let idade = 17;
let curso = "Engenharia de Software";
let ano = 2025;

let info = `
  Nome: ${nome} <br>
  Idade: ${idade} anos <br>
  Curso: ${curso} <br>
  Ano: ${ano}
`;

document.getElementById("info").innerHTML = info;

// QUESTÂO 8

const texto =
  "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas. ";

console.log(texto);

console.log(`Primeira posição de "em": ${texto.indexOf("em")}`);
console.log(`Última posição de "ia": ${texto.lastIndexOf("ia")}`);
console.log(`Palavra ciência: ${texto.indexOf("ciência")}`);
console.log(`Palavra métodos: ${texto.indexOf("métodos")}`);

// QUESTÂO 9

let valor = "100.9";
let valorConvertido = parseFloat(valor);
console.log(typeof valorConvertido);
