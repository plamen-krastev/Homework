function solve(data) {
  let sumRows = 0;
  let sumCols = 0;

  for (let i = 0; i < data.length; i++) {
    let curArr = data[i].join('');
    for (let j = 0; j < data.length; j++) {
      console.log(Number(curArr[j]));
      console.log(Number(curArr[0]));
      console.log('=============');
    }
  }
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]
]);