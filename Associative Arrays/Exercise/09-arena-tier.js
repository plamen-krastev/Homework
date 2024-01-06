function solve(arr) {

    // we need object in object. Create empty object:
    let gladiators = {};

    // populate objects:
    for (let gladiator of arr) {
        if (gladiator == "Ave Cesar") {
            break;
        }
        // getting gladiator, technique and skills
        let [name, technique, skill] = gladiator.split(' -> ');
        skill = Number(skill);

        let isInclude = name.includes(' vs '); // check
        // add to the objects
        if (isInclude) {
            // battle - gladiator v/s gladiator
            let [gladiator1, gladiator2] = name.split(' vs ');
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                let gladiator1Technique = Object.keys(gladiators[gladiator1]);
                let gladiator2Technique = Object.keys(gladiators[gladiator2]);
                for (let techniq1 of gladiator1Technique) {
                    for (let techniq2 of gladiator2Technique) {
                        if (techniq1 == techniq2) {
                            let power1 = gladiators[gladiator1][techniq1];
                            let power2 = gladiators[gladiator2][techniq2];
                            // console.log(`${gladiator1} -> ${techniq1} -> ${power1} vs ${gladiator2} ->
                            // ${techniq2} -> ${power2}`);
                            if (power1 > power2) {
                                delete gladiators[gladiator2];
                            } else if (power2 > power1) {
                                delete gladiators[gladiator1];
                            }
                        }
                    }
                }
            }
        } else {

            if (name in gladiators) {
                if (technique in gladiators[name]) {
                    if (skill > gladiators[name][technique]) {
                        gladiators[name][technique] = skill;
                    }
                } else {
                    gladiators[name][technique] = skill;
                }
            } else {
                gladiators[name] = {
                    [technique]: skill
                };
            }
        }
    }

    let result = Object
        .entries(gladiators)
        .sort(compareSkill);

    function compareSkill(a, b) {

        // console.log(Object.values(a[1], Object.values(b[1])));
        let totalA = 0;
        let totalB = 0;
        for (let skill of Object.values(a[1])) {
            totalA += skill;
        }
        for (let skill of Object.values(b[1])) {
            totalB += skill;
        }
        // console.log(totalA, totalB);

        return totalB - totalA || a[0].localeCompare(b[0]);
    }

    function compareTech(a, b) {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    }
    // console.log(result);

    for (let [name, techs] of result) {
        let total = 0;
        for (let skill of Object.values(techs)) {
            total += skill;
        }
        console.log(`${name}: ${total} skill`);
        let sortedTech = Object
            .entries(techs)
            .sort(compareTech);

        for (let [techName, powerSkill] of sortedTech) 
            console.log(`- ${techName} <!> ${powerSkill}`);
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