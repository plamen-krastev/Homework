function solve(length, kElementsSum) {
  let result = [1];
  for (let i = 1; i < length; i++) {
      let sum = 0;
      for (j = 0; j < kElementsSum; j++) {
          let curIndex = i - kElementsSum + j;
          if (curIndex < 0) {
              continue;
          } else {
              sum += result[curIndex];
          }
      }
      result.push(sum);
  }
  return result;
}

console.log(solve(6, 3));
console.log(solve(8, 2));
