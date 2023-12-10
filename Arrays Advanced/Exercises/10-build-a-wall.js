function solve(arr) {

    let concrete = 0;
    let concreteUsed = [];
    let cost = 0;
    let concretePerDay = 0;

    // arr.sort((a, b) => a - b);

    while (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            let curFoot = arr[i];

            if (curFoot == 30) {
                arr.splice(i, 1);
                i--;
                continue;
            }

            concretePerDay += 195;
            concrete += 195;
            curFoot++;

            if (curFoot == 30) {
                arr.splice(i, 1);
                i--;
            } else {
                arr.splice(i, 1, curFoot);
            }

        }
        concreteUsed.push(concretePerDay);
        concretePerDay = 0;
    }
    cost = concrete * 1900;

    console.log(concreteUsed.join(', '));
    console.log(`${cost} pesos`);
}

// solve([21, 25, 28]);
// solve([17]);
solve([17, 22, 17, 19, 17]);
solve([27, 28, 27, 28, 27, 26, 30]);
// solve([28]);