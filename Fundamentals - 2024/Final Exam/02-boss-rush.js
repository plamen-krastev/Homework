function solve(data) {
    let count = Number(data.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;

    for (let i = 0; i < count; i++) {
        let curBoss = data[i];
        let match = pattern.test(curBoss);
        if (match) {
            let boss = pattern.exec(curBoss);
            console.log(`${boss.groups.name}, The ${boss.groups.title}`);
            console.log(`>> Strength: ${boss.groups.name.length}`);
            console.log(`>> Armor: ${boss.groups.title.length}`);

        } else {
            console.log("Access denied!");
        }
    }
}

// solve(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#']);

solve(['3', '|STEFAN|:#H1gh Overseer#', '|IVAN|:#Master detective#', '|KARL|: #Marketing lead#']);