function solve(inStock, forDelivery) {

    let products = {};

    for (let i = 0; i < inStock.length; i += 2) {
        let curProduct = inStock[i];
        let curQty = Number(inStock[i + 1]);
        products[curProduct] = curQty;
    }
    // console.log(products);

    for (let j = 0; j < forDelivery.length; j += 2) {
        let curProduct = forDelivery[j];
        let curQty = Number(forDelivery[j + 1]);

        if (products.hasOwnProperty(curProduct)) {
            products[curProduct] += curQty;
        } else {
            products[curProduct] = curQty;
        }
    }

    for (let [key, value] of Object.entries(products)) {
        console.log(`${key} -> ${value}`);
    }

    // console.log(products);
}

// solve([
//   'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//   ],
//   [
//   'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//   ]
// );

solve([
  'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
  ],
  [
  'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
  ]
);