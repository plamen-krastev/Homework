function solve(input) {
    let storage = new Map();
    for (let token of input) {
        let [product, qty] = token.split(' ');
        qty = Number(qty);
        if (storage.has(product)) {
            let curQty = storage.get(product);
            storage.set(product, curQty + qty)
        } else {
            storage.set(product, qty);
        }
    }
    for ( let [product, qty] of storage) {
        console.log(product + ' -> ' + qty);
    }
}

solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);

solve(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);