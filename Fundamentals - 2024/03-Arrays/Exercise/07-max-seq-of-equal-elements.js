function solve(arr) {

  let maxArr = []; // current max array
  let maxArrFinal = [];
  let matchCount = 0; // related to push second time first number

  for (let i = 0; i < arr.length; i++) {
      let compareNum = arr[i];

      for (let j = i + 1; j < arr.length; j++) {
          let num = arr[j];
          if (num != compareNum) {
              matchCount = 0;
              break;
          } else if (num == compareNum) {
              maxArr.push(compareNum);

              i++; // increase 'i' in order bigger loop to continue from the proper index  

              if (matchCount == 0) {
                  maxArr.push(num); // push first number
              }
              matchCount++;
          }
      }
      if (maxArr.length > maxArrFinal.length) {
          maxArrFinal = [...maxArr]; // copy array
          maxArr = []; // empty temporary array
      } else {
          maxArr = []; // empty temporary array
      }

  }
  console.log(maxArrFinal.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);