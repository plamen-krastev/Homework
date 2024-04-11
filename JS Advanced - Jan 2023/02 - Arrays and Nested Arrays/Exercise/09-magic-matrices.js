function solve(data) {
  let isTrue = true;

  let rowsSum = [];
  let colsSum = [];
  for (let i = 0; i < data.length; i++) {
      let curColSum = 0;
      let curRowSum = 0;
      for (let j = 0; j < data.length; j++) {
          curColSum += data[j][i];
          curRowSum += data[i][j];
      }
      rowsSum.push(curRowSum);
      colsSum.push(curColSum);
  }

  let isEqualRows = rowsSum.every((value, _, arr) => value === arr[0]);
  let isEqualCols = colsSum.every((value, _, arr) => value === arr[0]);

  for (let i = 0; i < rowsSum.length; i++) {
      if (rowsSum[i] !== colsSum[i]) {
          isTrue = false;
      }
  }
  if (isEqualRows && isEqualCols && isTrue) {
      console.log('true');
  } else {
      console.log('false');
  }
}


solve([
  [45, 55, 66],
  [66, 55, 45],
  [55, 56, 55],
]);

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]
]);

solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]
]);

 solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0]
]);