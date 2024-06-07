function heroicInventory(data) {
  let heroes = [];

  for (let hero of data) {
    let [name, level, items] = hero.split(" / ");
    items = items ? items.split(", ") : [];
    level = Number(level);
    if (!items || !level) {
      continue;
    }
    let curHero = {
      name,
      level,
      items,
    };
    heroes.push(curHero);
  }

  console.log(JSON.stringify(heroes));
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
  "Plamen / 30",
]);
heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
