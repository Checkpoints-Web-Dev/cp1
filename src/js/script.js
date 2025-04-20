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

alert(`Seu IMC é: ${imc.toFixed(2)}`);

switch (true) {
  case imc < 18.5:
    alert("Você está abaixo do peso.");
    break;
  case imc <= 24.9:
    alert("Você está no peso ideal.");
    break;
  case imc > 24.9:
    alert("Você está acima do peso.");
    break;
  default:
    alert("Erro ao classificar o IMC.");
}

// QUESTÃO 4

for (let i = 1; i <= 50; i++) {
  console.log(`O valor é: ${i}!`);
}

// QUESTÃO 5

const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

let usuarioDigitado = prompt("Digite o nome de usuário:");
let senhaDigitada = prompt("Digite a senha:");

if (
  usuarioDigitado === usuarioCadastrado &&
  senhaDigitada === senhaCadastrada
) {
  alert("Login realizado com sucesso!");
} else {
  alert("Falha de autenticação. Usuário ou senha inválidos!");
}

// QUESTÂO 6

let notas = [8, 6, 7, 5, 9, 4, 7];

let somaNotas = notas.reduce((total, nota) => total + nota, 0);

let media = somaNotas / notas.length;

if (media >= 6) {
  alert(`Aluno aprovado! Média: ${media.toFixed(2)}`);
} else {
  alert(`Aluno reprovado! Média: ${media.toFixed(2)}`);
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
