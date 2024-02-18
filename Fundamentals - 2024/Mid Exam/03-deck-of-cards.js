function solve(input) {

    let cardDesk = [];
    let cards = input
        .shift()
        .split(', ');
    let iterations = Number(input.shift());

    for (let card of cards) {
        cardDesk.push(card);
    }

    for (let token of input) {
        let command = token.split(', ');
        let action = command.shift();
        let card = '';
        let index = 0;

        switch (action) {
            case 'Add':
                card = command.shift();
                if (cardDesk.includes(card)) {
                    console.log('Card is already in the deck');
                } else {
                    cardDesk.push(card);
                    console.log('Card successfully added');
                }
                break;
            case 'Remove':
                card = command.shift();
                if (cardDesk.includes(card)) {
                    index = cardDesk.indexOf(card);
                    cardDesk.splice(index, 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
            case 'Remove At':
                index = Number(command.shift());
                if (index >= 0 && index < cardDesk.length) {
                    cardDesk.splice(index, 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Index out of range');
                }
                break;
            case 'Insert':
                index = Number(command.shift());
                card = command.shift();
                if (index >= 0 && index < cardDesk.length) {
                    if (cardDesk.includes(card)) {
                        console.log('Card is already added');
                    } else {
                        cardDesk.splice(index, 0, card);
                        console.log('Card successfully added');
                    }
                } else {
                    console.log('Index out of range');
                }
                break;
        }
    }
    console.log(cardDesk.join(', '));
}

// solve(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"]);

// solve(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts", "2", "Add, Two of Clubs", "Remove, Five of Hearts"]);

solve(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]);