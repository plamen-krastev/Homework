function solve(matrix) {
    let mainSum = 0;
    let secondSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secondSum += matrix[i][matrix.length - 1 - i];
    }
    console.log(mainSum, secondSum);
}

solve([
  [20, 40],
  [10, 60]
]);

solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89]
]);