function solve(input) {

    let treasureChest = input
        .shift()
        .split('|');

    let token = input.shift();

    while (token !== 'Yohoho!') {
        let command = token.split(' ');
        let action = command.shift();

        switch (action) {
            case 'Loot':
                for (let booty of command) {
                    if (!treasureChest.includes(booty)) {
                        treasureChest.unshift(booty);
                    }
                }
                break;
            case 'Drop':
                let index = Number(command.shift());
                if (index >= 0 && index < treasureChest.length) {
                    let tmp = treasureChest
                        .splice(index, 1)
                        .join('');
                    treasureChest.push(tmp);
                }
                break;
            case 'Steal':
                let stolenCount = Number(command.shift());
                let stolenItem = [];
                stolenItem = treasureChest.splice(-stolenCount);
                console.log(stolenItem.join(', '));
                break;
        }

        token = input.shift();
    }

    let sum = 0;
    let averageGain = 0;

    if (treasureChest.length > 0) {
        for (let item of treasureChest) {
            sum += item.length;
        }
        averageGain = sum / treasureChest.length;
    }

    if (sum > 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

solve([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);

solve([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
]);