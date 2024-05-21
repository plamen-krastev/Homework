function sumFirstLast(data) {
  let firstNumber = Number(data[0]);
  let lastNumber = Number(data[data.length - 1]);
  return firstNumber + lastNumber;
}

console.log(sumFirstLast(["20", "30", "40"]));
console.log(sumFirstLast(["5", "10"]));
console.log(sumFirstLast(["5"]));
