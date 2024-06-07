function lowestPricesInCities(data) {
  /* 
    structure:
    obj = keys - products -> values - array of cities and price
  */

  let products = {};
  for (let cityInfo of data) {
    let [city, product, price] = cityInfo.split(" | ");
    price = Number(price);
    if (!products[product]) {
      products[product] = [city, price];
    } else {
      if (products[product][1] > price) {
        products[product] = [city, price];
      }
    }
  }

  for (let product in products) {
    console.log(
      `${product} -> ${products[product][1]} (${products[product][0]})`
    );
  }
}

lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
