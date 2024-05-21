function biggerHalf(data) {
  data.sort((a, b) => a - b);
  let startIndex = Math.floor(data.length / 2);
  let result = data.slice(startIndex);
  return result;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
