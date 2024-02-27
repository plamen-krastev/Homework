function solve(input) {
    let catalogue = {};
    for (let token of input) {
        let [item, price] = token.split(' : ');
        catalogue[item] = Number(price);
    }

    let sortedKeys = Object
        .keys(catalogue)
        .sort((a, b) => a.localeCompare(b), 'en', {sensitivity: 'base'});

    let sortedCatalogue = {};
    sortedKeys.forEach(key => sortedCatalogue[key] = catalogue[key]);

    let firstLetter = '';
    for (let [key, value] of Object.entries(sortedCatalogue)) {
        if (key[0] === firstLetter) {
            console.log(`  ${key}: ${value}`);
        } else {
            console.log(`${key[0]}`);
            console.log(`  ${key}: ${value}`);
        }
        firstLetter = key[0];
    }
}

// solve([
//     'Apricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);

solve(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);