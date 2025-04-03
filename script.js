// var numero1 = parseInt(prompt("me diga um número"));
// if (numero1 > 1000) {
//     alert(`o numero ${numero1} é maior que 1000`);
// }
// else if (numero1 == 1000) {
//     alert(`seu numero ${numero1} é igual a 1000`);
// }
// else {
//     alert(`seu numero ${numero1} é menor que 1000`);
// }


// var palavra = prompt("como vc diz oi pra alguem sem ser com a palavra oi ");
// if (palavra == "ola" || palavra == "Ola") {
//     alert(`a palavra ${palavra} é um sinonimo de oi`);
// }

// var numero2 = parseInt(prompt("me diga um numero"));
// if (numero2 >= 10) {
//     alert(`seu numero ${numero2} é maior que 10`);
// }
// else if (numero2 <= 50 & numero2 <= 10) {
//     alert(`seu numero ${numero2} é menor que 50`);
// }
// else if (numero2 > 50) {
//     alert(`seu numero ${numero2} é maior que 50`);
// }
// else {
//     alert(`seu numero ${numero2} é menor que 10`);
// }



// var umNumero = 5;

// if (umNumero == 5) {
//     console.log("vera esta mensagem");
// }
// if (umNumero == 6) {
//     console.log("nao vera esta mensagem");
// }

// var umaCor = "vermelho";

// if (umaCor == "vermelho") {
//     console.log("a cor é vermelho");
// }
// else {
//     console.log("a cor não é vermelho");
// }

// var nomeUsuario = prompt("inserir nome de usuario");

// if (nomeUsuario == "") {
//     alert("o nome de usuario não foi inserido");
// }
// else {
//     alert(`nome de usuario inserido, seu nome de usuario é ${nomeUsuario}`);
// }


// var combustivel = "GNV";

// if (combustivel == "GNV") {
//     alert("o carro é movido a gas");
// }
// else if (combustivel == "gasolina") {
//     alert("o carro é movido a gasolina")
// }
// else if (combustivel == alcool) {
//     alert("o carro é movido a alcool")
// }
// else {
//     alert("o carro não funciona")
// }

// var numero3 = parseInt(prompt("me diga um numero de 1 a 5"))

// if (numero3 == 1) {
//     alert(`o seu numero ${numero3} se escreve como um`);
// }
// else if (numero3 == 2) {
//     alert(`o seu numero ${numero3} se escreve como dois`);
// }
// else if (numero3 == 3) {
//     alert(`o seu numero ${numero3} se escreve como tres`);
// }
// else if (numero3 == 4) {
//     alert(`o seu numero ${numero3} se escreve como quatro`);
// }
// else if (numero3 == 5) {
//     alert(`o seu numero ${numero3} se escreve como cinco`);
// }

// else {
//     alert(`seu numero ${numero3} nao esta entre 1 a 5 👺👺👺👺👺👺`)
// }

// var numero = parseInt(prompt("me diga um numero entre 0 e 100"));
// if (numero >= 0 & numero <= 10) {
//     alert(`seu numero ${numero} se encaixa entre 0 e 10`);
// }
// else if (numero > 10 & numero <= 20) {
//     alert(`seu numero ${numero} se encaixa entre 11 e 20`);
// }
// else if (numero > 20 & numero <= 30) {
//     alert(`seu numero ${numero} se encaixa entre 21 e 30`);
// }
// else if (numero > 30 & numero <= 40) {
//     alert(`seu numero ${numero} se encaixa entre 31 e 40`);
// }
// else if (numero > 40 & numero <= 50) {
//     alert(`seu numero ${numero} se encaixa entre 41 e 50`);
// }
// else if (numero > 50 & numero <= 60) {
//     alert(`seu numero ${numero} se encaixa entre 51 e 60`);
// }
// else if (numero > 60 & numero <= 70) {
//     alert(`seu numero ${numero} se encaixa entre 61 e 70`);
// }
// else if (numero > 70 & numero <= 80) {
//     alert(`seu numero ${numero} se encaixa entre 71 e 80`);
// }
// else if (numero > 80 & numero <= 90) {
//     alert(`seu numero ${numero} se encaixa entre 81 e 90`);
// }
// else if (numero > 90 & numero <= 100) {
//     alert(`seu numero ${numero} se encaixa entre 91 e 100`);
// }
// else {
//     alert(`o seu numero ${numero} nao se encaixa no intervalo de 1 a 100 🤬🤬🤬🤬🤬🤬`);
// }

// var nome = prompt("inserir nome")
// var sobrenome = prompt("inserir sobrenome")

// if ((nome != "") && (sobrenome != "")) {
//     alert(`nome completo: \n ->${nome} ${sobrenome}`)
// }
// else {
//     alert("voce nao inseriu seu nome completo")
// }

// var nome = prompt("inserir nome")

// if ((nome == "ANA") || (nome == "ana") || (nome == "Ana")) {
//     alert("o nome inserido é Ana");
// }

// else {
//     alert("o nome inserido não é Ana");
// }



var nome = prompt("inserir nome");
var eVazio = nome == "";

if (!eVazio) {
    alert(`nome: ${nome}`)
}
else {
    alert("nome é vazio")
}