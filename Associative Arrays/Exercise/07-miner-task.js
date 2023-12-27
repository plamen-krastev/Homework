function solve(arr) {

    let resource = {};

    for (let i = 0; i < arr.length; i += 2) {
        let metal = arr[i];
        let qty = Number(arr[i + 1]);
        if (metal in resource) {
            resource[metal] += qty;
        } else {
            resource[metal] = qty;
        }
    }

    let entries = Object.entries(resource);

    for (let [metal, qty] of entries) {
      console.log(`${metal} -> ${qty}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

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