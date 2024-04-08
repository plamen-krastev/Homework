function solve(data) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let arr of data) {
        for (let num of arr) {
            if (num > biggest) {
                biggest = num;
            }
        }
    }
    console.log(biggest);
}

solve([
  [20, 50, 10],  
  [8, 33, 145]
]);

solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);