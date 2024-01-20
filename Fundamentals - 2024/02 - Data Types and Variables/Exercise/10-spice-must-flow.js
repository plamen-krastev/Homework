function solve(startingYieldPerDay) {

    let totalSpice = 0;
    let days = 0;

    while (startingYieldPerDay >= 100) {
        totalSpice += startingYieldPerDay - 26;
        days++;
        startingYieldPerDay -= 10;
    }

    if (totalSpice < 26) {
        totalSpice = 0;
    } else {
        totalSpice -= 26;
    }
    console.log(days);
    console.log(totalSpice);

}

solve(111);
solve(450);