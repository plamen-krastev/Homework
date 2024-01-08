function solve(arr) {

    let storage = {};

    for (let item of arr) {
        let [product, qty] = item.split(' ');
        if (storage.hasOwnProperty(product)) {
            storage[product] += Number(qty);
        } else {
            storage[product] = Number(qty);
        }
    }

    for (let [product, qty] of Object.entries(storage)) {
        console.log(product, "->", qty);
    }
}

// solve(['tomatoes 10',
// 'coffee 5',
// 'olives 100',
// 'coffee 40']);

solve(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);