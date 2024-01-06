function solve(arr) {

    let party = [];

    // populate party array:
    while (arr[0] != 'PARTY') {
        let curGuest = arr.shift();
        party.push(curGuest);
    }
    // console.log(party);
    arr.shift(); // remove 'PARTY'

    // remove guests from array party:
    for (let guest of arr) {
        let index = party.indexOf(guest);
        if (index != -1) {
            party.splice(index, 1);
        }
    }
    // console.log(party);

    let vips = [];
    let regulars = [];

    for (let guest of party) {
        if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
            vips.push(guest);
        } else {
            regulars.push(guest);
        }
    }

    // print

    console.log(party.length);
    if (vips.length > 0) {
        vips.sort((a, b) => (a - b));
        console.log(vips.join('\n'));
    }
    if (regulars.length > 0) {
        regulars.sort;
        console.log(regulars.join('\n'));
    }
}

solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);

solve([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);