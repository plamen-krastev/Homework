function sameNumbers(number) {
  let numberAsString = number.toString();
  let sum = 0;
  let isSame = true;

  for (let i = 0; i < numberAsString.length; i++) {
    let curNum = Number(numberAsString[i]);
    sum += curNum;

    if (i > 0 && isSame) {
      let prevNum = Number(numberAsString[i - 1]);
      if (prevNum !== curNum) {
        isSame = false;
      }
    }
  }

  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
