function solve(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1]);
        if (!result.hasOwnProperty(resource)) {
            result[resource] = qty;
        } else {
            result[resource] += qty;
        }
    }

    for (let resource in result) {
        console.log(`${resource} -> ${result[resource]}`);
    }
}

// solve([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]);

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);