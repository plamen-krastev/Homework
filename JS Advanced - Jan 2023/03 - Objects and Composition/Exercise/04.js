function solve(data) {
  let result = [];
  for (let heroInfo of data) {
    let [heroName, heroLevel, heroInventory] = heroInfo.split(" / ");
    heroLevel = Number(heroLevel);

    let hero = {
      name: heroName,
      level: heroLevel,
    };
    if (heroInventory) {
      let heroItems = heroInventory.split(", ");
      hero.items = heroItems;
    } else {
      hero.items = [];
    }

    result.push(hero);
  }
  let json = JSON.stringify(result);
  console.log(json);
}

// solve([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara",
// ]);
solve(["Jake / 1000 / Gauss, HolidayGrenade"]);
solve(["Jake / 1000"]);
