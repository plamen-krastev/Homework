function equalNeighbors(data) {
  let count = 0;
  let rowLength = data.length;
  let colLength = data[0].length;

  // vertical check for neighborship
  for (let col = 0; col < colLength; col++) {
    let prevSymbol = "";
    for (let row = 0; row < rowLength; row++) {
      let curSymbol = data[row][col];
      if (curSymbol === prevSymbol) {
        count++;
      }
      prevSymbol = curSymbol;
    }
  }

  // horizontal check for neighborship
  for (let row = 0; row < rowLength; row++) {
    let prevSymbol = "";
    for (let col = 0; col < colLength; col++) {
      let curSymbol = data[row][col];
      if (curSymbol === prevSymbol) {
        count++;
      }
      prevSymbol = curSymbol;
    }
  }

  return count;
}

console.log(
  equalNeighbors([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
);
console.log(
  equalNeighbors([
    ["test", "yes", "yo", "ho"],
    ["well", "done", "yo", "6"],
    ["not", "done", "yet", "5"],
  ])
);

console.log(
  equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2],
  ])
);
