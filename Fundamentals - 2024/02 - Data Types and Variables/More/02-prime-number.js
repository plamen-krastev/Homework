function solve(num) {

    let isPrime = true;

    for (let i = 2; i <= num - 1; i++) {
        if (num === i) {
            continue;
        } else if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}

solve(7);
solve(8);
solve(81);