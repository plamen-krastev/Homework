function negativePositiveNumbers(data) {
  let result = [];
  for (let number of data) {
    if (number < 0) {
      result.unshift(number);
    } else {
      result.push(number);
    }
  }
  console.log(result.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
