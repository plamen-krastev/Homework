function processOddPositions(data) {
  let result = data
    .filter((_, idx) => idx % 2 !== 0)
    .map((el) => el * 2)
    .reverse()
    .join(" ");
  return result;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
