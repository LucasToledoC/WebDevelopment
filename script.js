var nome = prompt("me diga seu nome: ");
var sobrenome = prompt("me diga seu sobrenome: ");
var ano = prompt("em que ano estamos?");
var idadeFinal = prompt(`vc vai terminar ${ano} com quantos anos?`);

var nomeCompleto = nome + " " + sobrenome;
var nascimento = ano - idadeFinal;

alert("Bem vindo!" + " " + nomeCompleto);
alert("legal, voce nasceu em" + " " + nascimento);

var numeroA = parseInt(prompt("me diga um número: "));
var numeroB = parseInt(prompt("me diga um outro número: "));

alert(`a soma de ${numeroA} + ${numeroB} é igual a ${numeroA + numeroB}`);
alert(`a multiplicação de ${numeroA} por ${numeroB} é igual a ${numeroA * numeroB}`);