function extractIncreasingSubsetFromArray(data) {
  let result = [];
  let maxNum = data[0];

  for (let i = 0; i < data.length; i++) {
    let curNum = data[i];
    maxNum = Math.max(curNum, maxNum);
    if (curNum === maxNum) {
      result.push(curNum);
    }
  }
  return result;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
