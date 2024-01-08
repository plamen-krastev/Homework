function spiceYield(startingYield) {

    let totalYield = 0;
    let days = 0;

    while (startingYield >= 100) {

        days++;
        totalYield += startingYield - 26;
        startingYield -= 10;

    }

    if (totalYield >= 26) {
        totalYield -= 26;
        console.log(days);
        console.log(totalYield);
    } else {
        console.log(days);
        console.log(totalYield);
    }

}

spiceYield (111); // 2 134
spiceYield (450); // 36 8938
spiceYield (90);