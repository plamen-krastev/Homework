function solve(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let curArray = matrix[i];
    for (let j = 0; j < curArray.length; j++) {
      let curSymbol = curArray[j];
      // j = index
      // curSymbol = find match
      // have to check in the other arrays
      console.log(curSymbol);
    }
    console.log(curArray);
  }
}

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

// console.log(solve([
//   ['2', '3', '4', '7', '0'],
//   ['4', '0', '5', '3', '4'],
//   ['2', '3', '5', '4', '2'],
//   ['9', '8', '7', '5', '4']
// ]));

// console.log(solve([
//   ['test', 'yes', 'yo', 'ho'],
//   ['well', 'done', 'yo', '6'],
//   ['not', 'done', 'yet', '5']
// ]));
