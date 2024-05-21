function diagonalSums(data) {
  let sumLeftDiagonal = 0;
  let sumRightDiagonal = 0;

  for (let i = 0; i < data.length; i++) {
    let idx = data.length - i - 1;
    sumLeftDiagonal += data[i][i];
    sumRightDiagonal += data[i][idx];
  }
  console.table(`${sumLeftDiagonal} ${sumRightDiagonal}`);
}

diagonalSums([
  [20, 40],
  [10, 60],
]);
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
