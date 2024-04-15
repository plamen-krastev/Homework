function solve(data) {
  let result = [];
  for (let heroInfo of data) {
    let [heroName, heroLevel, heroInventory] = heroInfo.split(" / ");
    heroLevel = Number(heroLevel);
    let heroItems = heroInventory ? heroInventory.split(", ") : [];
    // if (heroInventory) {
    //   let heroItems = heroInventory.split(", ");
    //   hero.items = heroItems;
    // } else {
    //   hero.items = [];
    // }
    let hero = {
      name: heroName,
      level: heroLevel,
      items: heroItems,
    };

    result.push(hero);
  }
  // let json = JSON.stringify(result);
  console.log(JSON.stringify(result));
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
solve(["Jake / 1000 / Gauss, HolidayGrenade"]);
solve(["Jake / 1000"]);
