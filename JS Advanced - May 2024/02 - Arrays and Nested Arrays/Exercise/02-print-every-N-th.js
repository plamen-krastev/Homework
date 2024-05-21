function printEveryNthElement(arr, step) {
  let result = [];

  // with for loop
  // for (let i = 0; i < arr.length; i += step) {
  //   let curElement = arr[i];
  //   result.push(curElement);
  // }

  // with filter
  result = arr.filter((el, idx) => {
    if (idx % step === 0) {
      return el;
    }
  });

  return result;
}

console.log(printEveryNthElement(["5", "20", "31", "4", "20"], 2));
console.log(printEveryNthElement(["dsa", "asd", "test", "tset"], 2));
console.log(printEveryNthElement(["1", "2", "3", "4", "5"], 6));
