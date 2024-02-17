function solve(input) {
    let pirateShip = input
        .shift()
        .split('>')
        .map(Number);
    let warship = input
        .shift()
        .split('>')
        .map(Number);
    let maxHealth = Number(input.shift());

    let tokens = input.shift();

    while (tokens !== 'Retire') {
        let command = tokens.split(' ');
        let action = command.shift();
        let index = 0;
        let damage = 0;
        switch (action) {
            case 'Fire':
                index = Number(command[0]);
                damage = Number(command[1]);
                if (index >= 0 && index < warship.length) {
                    let curValue = warship[index];
                    let newValue = curValue - damage;
                    if (newValue <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        warship[index] = newValue;
                        return;
                    } else {
                        warship[index] = newValue;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(command[0]);
                let endIndex = Number(command[1]);
                damage = Number(command[2]);

                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        let curValue = pirateShip[i];
                        let newValue = curValue - damage;
                        if (newValue <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            pirateShip[i] = newValue;
                            return;
                        } else {
                            pirateShip[i] = newValue;
                        }
                    }
                }
                break;
            case 'Repair':
                index = Number(command[0]);
                let health = Number(command[1]);
                let curValue = pirateShip[index];
                let newValue = curValue + health;
                if (index >= 0 && index < pirateShip.length) {
                    if (newValue > maxHealth) {
                        newValue = maxHealth
                    } else {
                        pirateShip[index] = newValue;
                    }
                }
                break;
            case 'Status':
                let twentyPercent = maxHealth * 0.2;
                let count = pirateShip.filter(x => x < twentyPercent);
                console.log(`${count.length} sections need repair.`);
                break;;
        }
        tokens = input.shift();
    }

    let pirateSum = 0;
    let warshipSum = 0;
    for (let number of pirateShip) {
        pirateSum += number;
    }
    for (let number of warship) {
        warshipSum += number;
    }
    console.log(`Pirate ship status: ${pirateSum}`);
    console.log(`Warship status: ${warshipSum}`);
}

solve([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]);

solve([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
]);