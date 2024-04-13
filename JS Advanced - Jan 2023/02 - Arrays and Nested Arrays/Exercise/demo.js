function isBigEnough(element, index, array) {
    return element >= 10;
  }
//   console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
//   console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

//   console.log([11, 14, 55, 88, 92, 1].every((el, idx, arr) => el >= 10));
//   console.log([11, 14, 55, 88, 92, 1].every((el, idx, arr) => el == arr[0]));
  console.log([11, 11, 11, 11, 11, 11].every((el, idx, arr) => arr[idx] === arr[0]));
  console.log([11, 11, 11, 11, 11, '11'].every((el, idx, arr) => el === arr[0]));
  