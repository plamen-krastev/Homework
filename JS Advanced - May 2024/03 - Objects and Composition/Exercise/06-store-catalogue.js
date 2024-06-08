function storeCatalogue(data) {
  let products = {};

  for (let productInfo of data) {
    let [product, price] = productInfo.split(" : ");
    price = Number(price);
    products[product] = price;
  }

  let sortedProducts = Object.entries(products).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let prevLetter = "";
  for (let [product, price] of sortedProducts) {
    let curLetter = product[0];
    if (curLetter === prevLetter) {
      console.log(`  ${product}: ${price}`);
    } else {
      console.log(curLetter);
      console.log(`  ${product}: ${price}`);
    }
    prevLetter = curLetter;
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

// storeCatalogue([
//   "Banana : 2",
//   "Rubic's Cube : 5",
//   "Raspberry P : 4999",
//   "Rolex : 100000",
//   "Rollon : 10",
//   "Rali Car : 2000000",
//   "Pesho : 0.000001",
//   "Barrel : 10",
// ]);
