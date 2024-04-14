function solve(data) {
  const citiesInfo = {};
  for (let token of data) {
    let [city, population] = token.split(" <-> ");
    population = Number(population);
    if (!citiesInfo[city]) {
      citiesInfo[city] = 0;
    }
    citiesInfo[city] += population;
  }

  Object.entries(citiesInfo).map((x) => console.log(`${x[0]} : ${x[1]}`));
  // console.log(entries);

  // for (let [city, population] of entries) {
  //   console.log(city + " : " + population);
  // }
}

solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
