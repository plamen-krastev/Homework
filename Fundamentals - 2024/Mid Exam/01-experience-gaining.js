function solve(input) {

    let experienceNeeded = input.shift();
    let battleCount = input.shift();
    let count = 0;
    let experience = 0;
    let isHaveNeededExp = true;

    for (let i = 1; i <= battleCount; i++) {
        let curExperience = input[i - 1];
        if (i % 15 === 0) {
            experience += curExperience * 1.05;
        } else if (i % 3 === 0) {
            experience += curExperience * 1.15;
        } else if (i % 5 === 0) {
            experience += curExperience * 0.9;
        } else {
            experience += curExperience;
        }
        count++;
        if (experience >= experienceNeeded) {
            console.log(
                `Player successfully collected his needed experience for ${count} battles.`
            );
            isHaveNeededExp = false;
            break;
        }
    }
    let diff = experienceNeeded - experience;

    if (isHaveNeededExp) {
        console.log(
            `Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`
        );
    }
}

// solve([
//     500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     30
// ]);

// solve([
//     400,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20
// ]);

solve([
    500,
    5,
    50,
    100,
    200,
    100,
    20
]);