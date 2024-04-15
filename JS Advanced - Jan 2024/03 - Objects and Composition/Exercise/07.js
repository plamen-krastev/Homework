function solve(data) {
  let towns = [];
  const token = data.shift().split("|");
  let [empty, town, latitude, longitude] = token;
  town = town.trim();
  latitude = latitude.trim();
  longitude = longitude.trim();

  for (let townInfo of data) {
    let [empty, curTown, curLat, curLong] = townInfo.split("|");
    // curTown = curTown.trim();
    curTown = curTown.trim();
    curLat = Math.round(Number(curLat.trim()) * 100) / 100;
    curLong = Math.round(Number(curLong.trim()) * 100) / 100;
    let curCity = {
      [town]: curTown,
      [latitude]: curLat,
      [longitude]: curLong,
    };
    towns.push(curCity);
  }
  console.log(JSON.stringify(towns));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

solve([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
