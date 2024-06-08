function townsToJSON(data) {
  let result = [];
  data.shift();
  const regPattern = / *\| */;

  for (let row of data) {
    let [city, latitude, longitude] = row
      .split(regPattern)
      .filter((el) => el.length > 0);
    // Math.round(num * 100) / 100
    latitude = Math.round(Number(latitude) * 100) / 100;
    longitude = Math.round(Number(longitude) * 100) / 100;

    let curTownObj = {
      Town: city,
      Latitude: latitude,
      Longitude: longitude,
    };
    result.push(curTownObj);
  }

  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
