function solve(input) {
    let inventory = input
        .shift()
        .split(' ');
    for (let token of input) {
        let [command, item] = token.split(' ');
        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                if (inventory.includes(item)) {
                    let idx = inventory.indexOf(item);
                    inventory.splice(idx, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    let idx = inventory.indexOf(item);
                    let tmp = inventory.splice(idx, 1);
                    inventory.push(tmp);
                }
                break;
            case 'Upgrade':
                let [itemToUpdate, upgrade] = item.split('-');
                if (inventory.includes(itemToUpdate)) {
                    let idx = inventory.indexOf(itemToUpdate);
                    idx++;
                    let itemToInsert = itemToUpdate + ':' + upgrade;
                    inventory.splice(idx, 0, itemToInsert);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}

solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);