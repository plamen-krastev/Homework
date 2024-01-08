function solve(arr) {

    let heroes = [];

    for (let hero of arr) {
        let [heroName, heroLevel, heroItems] = hero.split(' / ');

        let heroObject = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        }
        heroes.push(heroObject);
    }

    heroes.sort((a, b) => a.level - b.level);
    console.log(heroes);

    for (let hero of heroes) {
        console.log(
            `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
        );
    }
}

// solve([
//   'Isacc / 25 / Apple, GravityGun',
//   'Derek / 12 / BarrelVest, DestructionSword',
//   'Hes / 1 / Desolator, Sentinel, Antara'
//   ]
// );

solve([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara'
  ]
);