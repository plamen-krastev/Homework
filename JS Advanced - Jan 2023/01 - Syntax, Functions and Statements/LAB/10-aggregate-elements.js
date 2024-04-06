function solve(data) {
    let sum = 0;
    let inverseSum = 0;
    let numAsString = '';

    for (let num of data) {
        sum += num;
        inverseSum += 1 / num;
        numAsString = numAsString + String(num);
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(numAsString);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);