function ticTacToe(moves) {
  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let count = 0;

  for (let move of moves) {
    let [i, j] = move.split(" ");
    i = Number(i);
    j = Number(j);

    if (!dashboard[i][j]) {
      if (count % 2 === 0) {
        dashboard[i][j] = "X";
        count++;
      } else {
        dashboard[i][j] = "O";
        count++;
      }
    } else {
      console.log("This place is already taken. Please choose another!");
    }
  }

  for (let row of dashboard) {
    console.log(row.join('\t'));
  }
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
// ticTacToe([
//   "0 0",
//   "0 0",
//   "1 1",
//   "0 1",
//   "1 2",
//   "0 2",
//   "2 2",
//   "1 2",
//   "2 2",
//   "2 1",
// ]);
// ticTacToe([
//   "0 1",
//   "0 0",
//   "0 2",
//   "2 0",
//   "1 0",
//   "1 2",
//   "1 1",
//   "2 1",
//   "2 2",
//   "0 0",
// ]);
