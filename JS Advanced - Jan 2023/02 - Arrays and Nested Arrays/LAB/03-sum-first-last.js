function solve(data) {
    let first = Number(data[0]);
    let last = Number(data[data.length - 1]);
    return first + last;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));
console.log(solve(['5']));