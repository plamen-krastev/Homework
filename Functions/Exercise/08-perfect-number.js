function solve(num) {

    let checkNum = 0;

    // for (i = 1; i <= num / 2; i++) {
    //     if (num % i == 0) {
    //         checkNum += i;
    //     }
    // }

    for (i = 1; i < num; i++) {
        if (num % i == 0) {
            checkNum += i;
        }
    }

    if (num == checkNum) {
        console.log(`We have a perfect number!`);
    } else {
        console.log("It's not so perfect.");
    }

}

solve(6);
solve(28);
solve(1236498);