function biggestElement(data) {
  let result = Number.MIN_SAFE_INTEGER;
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      let curNum = data[row][col];
      if (curNum > result) {
        result = curNum;
      }
    }
  }
  return result;
}

console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
console.log(
  biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);
