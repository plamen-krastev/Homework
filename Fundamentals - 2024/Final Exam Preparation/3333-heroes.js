function solve(data) {
    let heroesCount = Number(data.shift());

    // heroes = { name: { HP: , MP: } };
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let heroInfo = data.shift();
        let [name, HP, MP] = heroInfo.split(' ');
        HP = Number(HP);
        MP = Number(MP);
        heroes[name] = {
            HP: HP,
            MP: MP
        };
    }

    let command = data.shift();
    while (command !== "End") {
        let tokens = command.split(' - ');
        let action = tokens.shift();

        if (action === "CastSpell") {
            let [name, neededMP, spellName] = tokens;
            neededMP = Number(neededMP);
            if (heroes[name].MP >= neededMP) {
                heroes[name].MP -= neededMP;
                console.log(
                    `${name} has successfully cast ${spellName} and now has ${heroes[name].MP} MP!`
                );
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action === 'TakeDamage') {
            let [name, damage, attacker] = tokens
            damage = Number(damage);
            heroes[name].HP -= damage;
            if (heroes[name].HP > 0) {
                console.log(
                    `${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].HP} HP left!`
                );
            } else {
                // possible issue!!!
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }
        } else if (action === 'Recharge') {
            let [name, amount] = tokens;
            amount = Number(amount);
            let totalMP = heroes[name].MP + amount;
            if (totalMP > 200) {
                amount = 200 - heroes[name].MP;
                heroes[name].MP = 200;
                console.log(`${name} recharged for ${amount} MP!`);
            } else {
                console.log(`${name} recharged for ${amount} MP!`);
                heroes[name].MP += amount;
            }
        } else {
            let [name, amount] = tokens;
            amount = Number(amount);
            let totalHP = heroes[name].HP + amount;
            if (totalHP > 100) {
                amount = 100 - heroes[name].HP;
                heroes[name].HP = 100;
                console.log(`${name} healed for ${amount} HP!`);
            } else {
                heroes[name].HP += amount;
                console.log(`${name} healed for ${amount} HP!`);
            }
        }

        command = data.shift();
    }

    for (let hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero].HP}`);
        console.log(`  MP: ${heroes[hero].MP}`);
    }
}

solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);

solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);