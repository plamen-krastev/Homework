function sortingNumbers(data) {
  let result = [];
  data.sort((a, b) => a - b);

  while (data.length > 0) {
    let firstEl = data.shift();
    result.push(firstEl);
    let lastEl = data.pop();
    if (lastEl === undefined) {
      break;
    }
    result.push(lastEl);
  }
  return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 55]));
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
