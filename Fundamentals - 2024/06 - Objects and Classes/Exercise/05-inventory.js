function inventory(input) {
    let heroes = [];

    for (let info of input) {
        let [name, level, items] = info.split(' / ');
        let hero = {
            name: name,
            level: level,
            items: items
        };

        heroes.push(hero);
    }
    heroes = heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

// inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);

inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);