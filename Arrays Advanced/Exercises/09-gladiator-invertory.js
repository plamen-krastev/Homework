function solve(commands) {

    let equipment = commands
        .shift()
        .split(' ');

    for (let tokens of commands) {
        let curToken = tokens.split(' ');
        let curCommand = curToken[0];
        let curItem = curToken[1];

        switch (curCommand) {
            case 'Buy':
                if (!equipment.includes(curItem)) {
                    equipment.push(curItem);
                }
                break;
            case 'Trash':
                if (equipment.includes(curItem)) {
                    let elIndex = equipment.indexOf(curItem);
                    equipment.splice(elIndex, 1);
                }
                break;
            case 'Repair':
                if (equipment.includes(curItem)) {
                    let elIndex = equipment.indexOf(curItem);
                    let repairedEl = equipment.splice(elIndex, 1);
                    equipment.push(repairedEl);
                }
                break;
            case 'Upgrade':
                let item = curItem.split('-');
                let eqForUpgrade = item[0];
                let upgrade = item[1];
                let result = eqForUpgrade + ':' + upgrade;

                if (equipment.includes(eqForUpgrade)) {
                    let elIndex = equipment.indexOf(eqForUpgrade);
                    // console.log(elIndex);
                    equipment.splice(elIndex + 1, 0, result);
                }
                break;
        }
    }
    console.log(equipment.join(' '));
}

solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);