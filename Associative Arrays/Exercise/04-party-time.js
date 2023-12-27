function solve(arr) {

    let party = new Set();

    let index = arr.indexOf('PARTY');

    for (let i = 0; i < index; i++) {
        let curEl = arr[i];
        party.add(curEl);
    }

    for (let i = (index + 1); i < arr.length; i++) {
        let curEl = arr[i];
        party.delete(curEl);
    }

    let guests = Array
        .from(party)
        .sort(((a, b) => (a - b)));

    console.log(party.size);
    console.log(guests.join('\n'));
}

solve([
    '1OK9Yo0h',
'2KK9Yo0h',
'3LK9Yo0h',
'4SK9Yo0h',
'5TK9Yo0h',
'0UK9Yo0h',

'6WK9Yo0h',
'7BK9Yo0h',
'8AK9Yo0h',
'9mK9Yo0h',
'bbt1OK9Y',
'BaA2KK9r',
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

// solve([
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]);