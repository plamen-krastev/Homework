function solve(input) {

    let guests = [];
    let guest = input.shift();
    while (guest !== 'PARTY') {
        guests.push(guest);
        guest = input.shift();
    }

    for (let i = 0; i < input.length; i++) {
        let cameGuest = input[i];
        if (guests.includes(cameGuest)) {
            let index = guests.indexOf(cameGuest);
            guests.splice(index, 1);
        }
    }

    let vip = [];
    let regular = [];
    for (let vipOrReg of guests) {
        let firstChar = vipOrReg[0].codePointAt();
        if (firstChar >= 48 && firstChar <= 57) {
            vip.push(vipOrReg);
        } else {
            regular.push(vipOrReg);
        }
    }
    let count = vip.length + regular.length;
    console.log(count);
    console.log(vip.join('\n'));
    console.log(regular.join('\n'));
}

solve([
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