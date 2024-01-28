function solve(arr) {

    let health = 100;
    let coins = 0;
    let rooms = 0;

    let quest = arr[0].split('|');
    for (let tokens of quest) {
        let token = tokens.split(' ');
        let command = token[0];
        let power = Number(token[1]);

        if (command === "potion") {
            if (power + health > 100) { //  && health < 100
                power = 100 - health;
                health += power;
                console.log(`You healed for ${power} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                health += power;
                console.log(`You healed for ${power} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            rooms++;
        } else if (command === "chest") {
            console.log(`You found ${power} coins.`);
            coins += power;
            rooms++;
        } else {
            rooms++;
            health -= power;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${rooms}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);