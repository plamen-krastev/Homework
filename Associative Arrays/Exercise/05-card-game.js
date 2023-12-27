function solve(arr) {

    let playersCards = {};

    // creating auxiliary arrays - one for card type and one for card power
    let cardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let cardPower = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }

    // populate playersCards
    for (let playerDeck of arr) {

        // getting player name and player card
        let [playerName, cardsString] = playerDeck.split(': ');
        let cards = cardsString.split(', ');

        // adding player name and player card in to the object
        if (playerName in playersCards) {
            playersCards[playerName].push(...cards); // using spread operator
        } else {
            playersCards[playerName] = cards;
        }
    }

    // array from object
    let entries = Object.entries(playersCards);

    for (let [name, deck] of entries) {
        // getting unique value
        let uniqueDeck = new Set(deck);
        let deckValue = 0;

        // obtain card power, type
        for (let card of uniqueDeck) {
            let power = card.slice(0, card.length - 1);
            let type = card.slice(card.length - 1);
            let cardStrength = cardPower[power] * cardType[type];
            deckValue += cardStrength;            
        }
        // printing the output
        console.log(`${name}: ${deckValue}`);
    }
}

// solve([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);

solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);