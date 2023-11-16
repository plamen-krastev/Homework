function addAndSubtract (arr) {

  let result = [];

  let sumArr = 0;
  let sumResult = 0;

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    sumArr += curNum;
    if (curNum % 2 == 0) {
      let even = curNum + i;
      result.push(even); 
      sumResult += even;
    } else {
      let odd = curNum - i;
      result.push(odd);
      sumResult += odd;
    }
  }
  
  console.log(result);
  console.log(sumArr);
  console.log(sumResult);
}

// addAndSubtract ([5, 15, 23, 56, 35]);
addAndSubtract ([-5, 11, 3, 0, 2]);