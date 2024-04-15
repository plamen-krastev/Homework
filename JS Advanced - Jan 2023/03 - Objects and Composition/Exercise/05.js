function solve(data) {
  let products = {};

  for (let tokens of data) {
    let [town, product, price] = tokens.split(" | ");
    price = Number(price);
    if (!products[product]) {
      products[product] = [town, price];
    } else {
      if (products[product][1] > price) {
        products[product][0] = town;
        products[product][1] = price;
      }
    }
  }
  for (let key in products) {
    console.log(`${key} -> ${products[key][1]} (${products[key][0]})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
