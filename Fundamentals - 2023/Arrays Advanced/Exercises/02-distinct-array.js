function solve(arr) {

    let result = [];

    for (i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    console.log(result.join(' '));
}

// solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);