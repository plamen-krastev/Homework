function magicMatrices(data) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let curRowSum = 0;
    let curColSum = 0;
    for (let j = 0; j < data.length; j++) {
      let curRowNum = data[i][j];
      let curColNum = data[j][i]; // vertical element
      curRowSum += curRowNum;
      curColSum += curColNum;
    }
    result.push(curRowSum);
    result.push(curColSum);
  }

  let isMagic = result.every((el, _, arr) => el === arr[0]);

  console.log(isMagic);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
