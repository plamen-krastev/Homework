function solve(data) {
  let sum = 0;
  let inverseSum = 0;
  let concat = "";
  for (let i = 0; i < data.length; i++) {
    let curNum = data[i];
    sum += curNum;
    inverseSum += 1 / curNum;
    concat += curNum;
  }

  console.log(sum);
  console.log(inverseSum);
  console.log(concat);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
