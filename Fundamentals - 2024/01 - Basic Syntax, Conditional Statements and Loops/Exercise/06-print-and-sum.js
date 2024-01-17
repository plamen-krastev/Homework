function solve(startNum, stopNum) {

    let sum = 0;
    let numbers = [];

    for (let i = startNum; i <= stopNum; i++) {
        sum += i;
        numbers.push(i);
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);