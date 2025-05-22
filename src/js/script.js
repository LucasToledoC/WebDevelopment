// const meuArray = ['rosa', 'verde', 'azul'];
// console.log(meuArray.length);

// for (let i = 0; i < meuArray.length; i++) {
//     console.log(meuArray[i]);
// }

//.push // no final
//unshift // no inicio

// const nomes = ['Luis', 'Ana', "Joao", 'Julia']
// console.log(nomes)

// nomes.pop();
// console.log(nomes)

// nomes.shift();
// console.log(nomes)

// const nomes = ["Rita", "Mara", "Luiz", "Ana", "Léo", "Jão", "Marco"]
// nomes.splice(2, 4)

// console.log(nomes)

// const nomes = ['Jordan', 'Lebron', 'Kobe', 'Alemidia']
// console.log(nomes.join(", "))

// console.log(nomes.join("*"))

// const caes = ["pupy", "Ronnied"]
// const gatos = ["Mishi", 'Garfield', "Zuri"]

// const animais = caes.concat(gatos)
// console.log(animais)

// const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa'];

// const masculinos = nomes.slice(1, 3);
// Pedro, Miguel

// const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa'];

// console.log(nomes.includes('Rita'))
// console.log(nomes.includes('Miguel'))
// console.log(nomes.includes('Julieta'))

// const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa'];

// console.log(nomes.indexOf('Rita'))
// console.log(nomes.indexOf('Ana'))
// console.log(nomes.indexOf('Julieta'))

// const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa'];

// nomes.reverse()
// console.log(nomes)

// const listaNomes = []
// let quantidade = 5

// do {
//     let entrada = prompt("inserir nome")
//     listaNomes.push(entrada.toUpperCase())
//     console.log(listaNomes.length)
// } while (listaNomes.length != quantidade)

// const novaLista = listaNomes.concat(["ANA", "EMA"])

// console.log(novaLista.join("\n"))

cores = []
quantidade = 5
do {
    cor1 = prompt("diga uma cor")
    if (!isNaN(cor1)) {
        cores.push(cor1)
        console.log(cores)
        quantidade++
    }
    else {
        cor1 = prompt("diga uma cor")
    }
} while (quantidade < 5)