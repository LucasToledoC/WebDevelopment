
// const btn = document.getElementById('botao')
// const popup = document.getElementById('popup')

// btn.addEventListener('click', () => {
//     popup.classList.add('popup-active')

//     setTimeout(() =>
//     {
//         popup.classList.remove('popup-active')
//     }, 2500)
// })

// for (let letra of "Olá") {
//     console.log(letra)
// }
// for (let letra of "Mundo") {
//     console.log(letra)
// }

// for (let letra of "olá ") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)
// }

// for (let letra of "mundo") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 3000)
// }

// function multiply(x, y) {
//     return x * y;
// }

// function printSquare(x) {
//     let s = multiply(x, x);
//     console.log(s);
// }

// printSquare(3)

// console.log('1 - Inicio do processo')

// setTimeout(() => {
//     console.log("2 - Meio do processo")
// }, 0)

// console.log("3 - Fim do processo")

// setInterval(() => {
//     console.log("Tic")
// }, 10000)

// let counter = 0
// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if(counter >= 5) {
//         clearInterval(interval)
//         console.log("O intervalo foi removido")
//     }
//  }, 1000)

// console.log("Inicio")

// const fim = setTimeout(() => {
//     console.log("Fim")
// }, 2000)

// clearTimeout(fim)

// new Promise((resolve, reject ) => {
//     //corpo da promessa
// })

// const eventoFuturo = () => {
//     return new Promise((resolve, reject) => {
//         //corpo da promessa
//     })
// }
// console.log(eventoFuturo())
// //promise pendente

// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject) => {
//         if (res === true) {
//             resolve('Promessa resolvida')
//         } else {
//             reject('Promessa rejeitada')
//         }
//     })
// }

// console.log(eventoFuturo(true))
// //promise {fulfilled promessa resolvida}

// console.log(eventoFuturo(false))
// //promise {rejected promessa rejeitada}

// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve('Promessa resolvida') : reject('promessa rejeitada')
            
//         }, 2000)
//     })
// }

// console.log(eventoFuturo(true))

// console.log(eventoFuturo(false))

const BD = [
    { id: 1, nome: 'Produto 1', preco : 1500},
    { id: 2, nome: 'Produto 2', preco : 2500},
    { id: 3, nome: 'Produto 3', preco : 3500}
]
const pedirProdutos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 5000)
    })
}
let produtos = []

const renderProdutos = (arr) => {
    console.log(produtos)
}

pedirProdutos()
    .then((res) => {
        produtos = res
        renderProdutos(produtos)
    })
