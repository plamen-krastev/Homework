function pianist(data) {
    let initialCount = Number(data.shift());
    let pieces = {}; // { pieces: { composer: , key: } }
    for (let i = 0; i < initialCount; i++) {
        let [piece, composer, key] = data
            .shift()
            .split("|");
        pieces[piece] = {
            composer: composer,
            key: key
        };
    }

    let command = data.shift();
    while (command !== 'Stop') {
        let token = command.split("|");
        let action = token.shift();
        switch (action) {
            case 'Add':
                let [piece, composer, key] = token;
                if (piece in pieces) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    pieces[piece] = {
                        composer: composer,
                        key: key
                    };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':
                let pieceToRemove = token.shift();
                if (pieces.hasOwnProperty(pieceToRemove)) {
                    delete pieces[pieceToRemove];
                    console.log(`Successfully removed ${pieceToRemove}!`);
                } else {
                    console.log(
                        `Invalid operation! ${pieceToRemove} does not exist in the collection.`
                    );
                }
                break;
            case 'ChangeKey':
                let [pieceToChange, newKey] = token;
                if (pieceToChange in pieces) {
                    pieces[pieceToChange].key = newKey;
                    console.log(`Changed the key of ${pieceToChange} to ${newKey}!`);
                } else {
                    console.log(
                        `Invalid operation! ${pieceToChange} does not exist in the collection.`
                    );
                }
                break;
        }
        command = data.shift();
    }
    for (let piece in pieces) {
        // console.log(pieces[piece]);
        console.log(
            `${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`
        );
    }
}
// pianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);