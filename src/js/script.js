// let xicara = {
//     cor: "branca",
//     forma: "redonda",
//     peso: 200,
//     capacidade: 10000
// }

// xicara.cor = "Pretona"
// xicara["cor"] = "rosa"

// console.log(`${xicara.cor}\n${xicara.forma}\n${xicara.peso}\n${xicara.capacidade}`)

// function xicara(cor, forma, peso, capacidade) {
//     this.cor = cor;
//     this.forma = forma;
//     this.peso = peso;
//     this.capacidade = capacidade;
// }

// const xicara1 = new xicara("branca", "redonda", 5, 10);
// const xicara2 = new xicara("preta", "quadrada", 8, 15);

// console.log(xicara1)
// console.log(xicara2)

// function pessoa(nome, idade, rua) {
//     this.nome = nome;
//     this.idade = idade;
//     this.rua = rua;
//     this.falar = function () {
//         console.log("OLÁ, SOU " + this.nome)
//     }
// }

// const pessoa1 = new pessoa("Homer", 39, "Av. Sempre-verde 742");
// const pessoa2 = new pessoa("Marge", 36, "Av. Sempre-verde 742");

// pessoa1.falar();
// pessoa2.falar();



// let texto = "Rasgaram as minhas Pipas"

// console.log(texto.length);

// console.log(texto.toLowerCase());

// console.log(texto.toUpperCase());

// const pessoa = {
//     nome: "Homer",
//     idade: 39,
//     rua: "Av. Sempre-verde 742"
// }


// console.log("nome" in pessoa);

// console.log("origem" in pessoa);


// const pessoa = {
//     nome: "homer",
//     idade: 39,
//     rua: "Av. Sempre-verde 742"
// }


// for (const propriedade in pessoa) {
//     console.log(pessoa[propriedade])
// }


// class Carro {
//     constructor(marca, ano, cor) {
//         this.marca = marca;
//         this.ano = ano;
//         this.cor = cor;
//     }
//     apresentar() {
//         var idade = 2025 - this.ano;
//         console.log("O " + this.marca + " é " + this.cor + " e tem " + idade + " anos")
//     }
// }

// const meuCarro = new Carro("Ford", 2014, "vermelho");
// meuCarro.apresentar();


class Alimento {
    constructor(nome, cor, peso, tipo) {
        this.nome = nome,
            this.cor = cor,
            this.peso = peso,
            this.tipo = tipo
    }
    descricao() {
        console.log(`A ${this.nome} é da cor ${this.cor} e pesa ${this.peso}, portanto é do tipo ${this.tipo}.`)
    }
}


const alimento1 = new Alimento("banana", "amarela", "50 gramas", "fruta")
const alimento2 = new Alimento("cenoura", "laranja", "20 gramas", "verdura")

alimento1.descricao()
alimento2.descricao()