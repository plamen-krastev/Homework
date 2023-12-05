function solve(nums, bomb) {

    let bombNum = bomb[0];
    let bombPower = bomb[1];

    // find the bomb. find the index. start = index - power, elements = 2 * power + 1

    for (let i = 0; i < nums.length; i++) {
          let curNum = nums[i];
        if (curNum == bombNum) {

          let start = i - bombPower;
            let el = 2 * bombPower + 1;

            if (start < 0) {
                start = 0;
                el = bombPower + 1 + i;
            }

            nums.splice(start, el);
            i = 0;
        }
    }

    let sum = 0;

    for (i = 0; i < nums.length; i++) {
        let cur = nums[i];
        sum += cur;
    }

    // console.log(nums);
    console.log(sum);

}

solve([1, 2, 2, 4, 2, 2, 2, 9, 4, 1], 
      [4, 2]
);

// solve([1, 4, 4, 2, 8, 9, 1],
//       [9, 3]
// );

// solve([1, 7, 7, 1, 2, 3],
//       [7, 1]
// );

// solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//       [2, 1]
// );