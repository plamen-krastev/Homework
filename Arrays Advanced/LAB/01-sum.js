function solve(input) {
    let arr = input.map(Number);
    let result = arr[0] + arr.pop();
    console.log(result);
}

solve(['20', '30', '40']);
solve(['5', '10']);
solve(['5']);
solve([]);