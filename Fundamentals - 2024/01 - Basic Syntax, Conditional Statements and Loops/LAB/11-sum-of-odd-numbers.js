function solve(num) {
    let sum = 0;

    for (let i = 1; i < num * 2; i += 2) {
        console.log(i);
        sum += i;
    }

    console.log(`Sum: ${sum}`);
}

solve(5);
solve(3);
solve(4);
solve(2);
solve(7);