function solve(num1AsString, num2AsString) {
  let startNum = Number(num1AsString);
  let finalNum = Number(num2AsString);
  let sum = 0;
  for (let i = startNum; i <= finalNum; i++) {
    sum += i;
  }
  console.log(sum);
}

solve("1", "5");
solve("-8", "20");
