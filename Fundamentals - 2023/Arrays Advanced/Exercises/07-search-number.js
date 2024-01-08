function solve(nums, manipulation) {

    let takenEl = manipulation[0];
    let deleteEl = manipulation[1];
    let searchEl = manipulation[2];

    let count = 0;

    let result = nums.slice(0, takenEl);
    result.splice(0, deleteEl);

    for (i = 0; i < result.length; i++) {
        let curNum = result[i];
        if (curNum == searchEl) {
            count++;
        }
    }

    console.log(`Number ${searchEl} occurs ${count} times.`);
}

solve([5, 2, 3, 4, 1, 6],
      [5, 2, 3]
);
solve([7, 1, 5, 8, 2, 7],
      [3, 1, 5]
);