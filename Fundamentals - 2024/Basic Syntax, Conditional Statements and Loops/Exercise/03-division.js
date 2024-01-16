function solve(num) {

    let division = [10, 7, 6, 3, 2];
    let isDivided = false;

    for (let i = 0; i < division.length; i++) {
        let curDiv = division[i];
        if (num % curDiv === 0) {
            console.log(`The number is divisible by ${curDiv}`);
            isDivided = true;
            break;
        }
    }

    if (!isDivided) {
        console.log("Not divisible");
    }
}

solve(30);
solve(15);
solve(12);
solve(1643);