function solve(input) {
    let gladiators = {};
    let token = input.shift();

    while (token !== 'Ave Cesar') {
        if (token.includes(' -> ')) {
            let [name, skill, power] = token.split(' -> ');
            power = Number(power);
            if (name in gladiators) {
                if (skill in gladiators[name]) {
                    if (power > gladiators[name][skill]) {
                        gladiators[name][skill] = power;
                    }
                } else {
                    gladiators[name][skill] = power;
                }
            } else {
                gladiators[name] = {
                    [skill]: power
                };
            }
        } else {
            let [gladiator1, gladiator2] = token.split(' vs ');
            if (gladiators[gladiator1] && gladiators[gladiator2]) { // check for valid gladiators
                let entries1 = Object.entries(gladiators[gladiator1]);
                let entries2 = Object.entries(gladiators[gladiator2]);
                for (let [skill1, power1] of entries1) {
                    for (let [skill2, power2] of entries2) {
                        if (skill1 === skill2) {
                            if (power1 > power2) {
                                delete gladiators[gladiator2];
                            } else if (power2 > power1) {
                                delete gladiators[gladiator1];
                            }
                        }
                    }
                }
            }
        }
        token = input.shift();
    }

    let gladiatorsEntries = Object
        .entries(gladiators)
        .sort(compareSkill);

    for (let [name, token] of gladiatorsEntries) {
        let totalPower = 0;
        let skillsEntries = Object
            .entries(token)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        for (let [skill, power] of skillsEntries) {
            totalPower += power;
        }
        console.log(`${name}: ${totalPower} skill`);
        for (let [skill, power] of skillsEntries) {
            console.log(`- ${skill} <!> ${power}`);
        }
    }

    function compareSkill(a, b) {
        let totalPowerA = 0;
        let totalPowerB = 0;

        for (let power of Object.values(a[1])) {
            totalPowerA += power;
        }
        for (let power of Object.values(b[1])) {
            totalPowerB += power;
        }
        return totalPowerB - totalPowerA;
    }
}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);

// solve([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]);