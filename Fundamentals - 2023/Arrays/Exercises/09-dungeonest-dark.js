function solve(arr) {
    let health = 100;
    let coins = 0;
    let totalCoins = 0;
    let rooms = 0;
    let isAlive = true;

    let info = arr[0];
    let arrSplit = info.split('|');

    for (let i = 0; i < arrSplit.length; i++) {
        let cur = arrSplit[i];
        let arrCur = cur.split(" ");
        let command = arrCur[0];
        let value = Number(arrCur[1]);

        if (command == 'potion') {
            if (health + value > 100) {
                let diff = health + value - 100;
                value = value - diff;
            }
            health += value;
            rooms++;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            coins = value;
            totalCoins += value;
            rooms++;
            console.log(`You found ${coins} coins.`);
        } else {
            rooms++;
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${rooms}`);
                isAlive = false;
                break;
            }
        }

    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }

}

// solve (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve (["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);