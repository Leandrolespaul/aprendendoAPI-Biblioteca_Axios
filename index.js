import axios from "axios"





// const encontrarCard = (nomeCard) => {

//     axios.get("https://api.magicthegathering.io/v1/cards")
//         .then((response) => {
//             response.data.cards.forEach(card => {
//                 if (card.name === nomeCard){

//                     array.push(card.name)
//                 }
//             });
//             console.log(new Set(array))
//         })
//         .catch((error) => {
//             console.log(error)
//         })

// }

// const encontrarCard = (nomeCard) => {
//     axios.get("https://api.magicthegathering.io/v1/cards")
//         .then((response) => {
//             const cartaEncontrada = response.data.cards.find(carta => carta.name === nomeCard)
//             if (cartaEncontrada) {
//                     console.log(cartaEncontrada.name)
//                     array.push({nome: "nome"})
//             } else {
//                 console.log('Card não encontrado!')
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

let cont = 1
const id = () => cont++

const deck = []

const encontrarCard = (nomeCard) => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.scryfall.com/catalog/card-names")
            .then((response) => {
                const encontrarCard = response.data.data.find(card => card === nomeCard)
                if (encontrarCard) {
                    deck.push({ id: id(), card: encontrarCard })
                }
                resolve()
            })
            .catch((error) => {
                console.log(error)
                reject()
            })
    })
}
Promise.all([encontrarCard('"Ach! Hans, Run!"'), encontrarCard("Thermo-Alchemist")]).then(() => console.log(deck))


// encontrarCard("Anowon, the Ruin Thief")
// encontrarCard("Whip-Spine Drake")



// axios.get("https://api.scryfall.com/catalog/card-names")
