function solve(data) {
  let result = [];
  for (let tokens of data) {
    let [product, price] = tokens.split(" : ");
    let curProduct = [product, Number(price)];
    result.push(curProduct);
  }

  result.sort((a, b) => a[0].localeCompare(b[0]));

  let previousLetter = "";
  for (let productInfo of result) {
    let [product, price] = productInfo;
    let firstLetter = product[0];
    if (previousLetter === firstLetter) {
      console.log(`  ${product}: ${price}`);
    } else {
      console.log(firstLetter);
      console.log(`  ${product}: ${price}`);
    }
    previousLetter = firstLetter;
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

// solve([
//   "Banana : 2",
//   "Rubic' s Cube : 5 ",
//   "Raspberry P : 4999",
//   "Rolex : 100000",
//   "Rollon : 10",
//   "Rali Car : 2000000",
//   "Pesho : 0.000001",
//   "Barrel : 10",
// ]);
