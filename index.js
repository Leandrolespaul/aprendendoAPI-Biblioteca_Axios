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
    axios.get("https://api.scryfall.com/catalog/card-names")
        .then((response) => {
            console.log(response)
            const encontrarCard = response.data.data.find(card => card === nomeCard)
            if (encontrarCard) {
                
                deck.push({ id: id(), card: encontrarCard })
            }
            console.log(deck)
        })
        .catch((error) => {
            console.log(error)
        })


}
encontrarCard("A Little Chat")
encontrarCard("Thermo-Alchemist")


