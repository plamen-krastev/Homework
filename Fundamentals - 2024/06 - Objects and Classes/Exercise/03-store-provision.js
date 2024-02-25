function solve(stock, ordered) {
    let warehouse = {};
    for (let i = 0; i < stock.length; i += 2) {
        let curItem = stock[i];
        let curQty = Number(stock[i + 1]);
        warehouse[curItem] = curQty;
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let curItem = ordered[i];
        let curQty = Number(ordered[i + 1]);
        if (warehouse.hasOwnProperty(curItem)) {
            warehouse[curItem] += curQty;
        } else {
            warehouse[curItem] = curQty;
        }
    }

    let result = Object.entries(warehouse);
    for (let item of result) {
        let [key, value] = item;
        console.log(`${key} -> ${value}`);
    }

}

// solve(
//   ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//   ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
// );

solve(
  ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
  ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);