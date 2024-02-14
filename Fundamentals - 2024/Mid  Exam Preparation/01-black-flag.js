function solve(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 1.5;
        } else {
            totalPlunder += dailyPlunder;
        }

        if (i % 5 === 0) {
            totalPlunder = 0.7 * totalPlunder;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve((["5", "40", "100"]));
solve((["10", "20", "380"]));