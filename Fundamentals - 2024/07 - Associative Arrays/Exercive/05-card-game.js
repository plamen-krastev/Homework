function solve(input) {

    let persons = {};
    for (let token of input) {
        let [person, cardsAsString] = token.split(': ');
        let cards = cardsAsString.split(', ');
        if (!persons.hasOwnProperty(person)) {
            persons[person] = [];
            for (let card of cards) {
                if (!persons[person].includes(card)) {
                    persons[person].push(card);
                }
            }
        } else {
            for (let card of cards) {
                if (!persons[person].includes(card)) {
                    persons[person].push(card);
                }
            }
        }
    }

    let mapped = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        S: 4,
        H: 3,
        D: 2,
        C: 1,
        A: 14,
        K: 13,
        Q: 12,
        J: 11
    };

    for (let person in persons) {
        // console.log(person); console.log(persons[person].length);
        let cards = persons[person];
        let cardsValue = 0;
        for (let card of cards) {
            let stringLength = card.length;
            let multiply = card[stringLength - 1];
            let power = 0;
            if (card.length === 2) {
                let cardType = card[0];
                power = mapped[cardType] * mapped[multiply];
                cardsValue += power;
            } else {
                power = 10 * mapped[multiply];
                cardsValue += power;
            }
            persons[person] = cardsValue;
        }
    }

    let result = Object.entries(persons);
    for (let person of result) {
        let [name, value] = person
        console.log(`${name}: ${value}`);
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);

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