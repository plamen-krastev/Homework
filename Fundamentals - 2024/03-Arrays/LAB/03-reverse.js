function solve(num, arr) {

    let result = [];

    for (let i = 0; i < num; i++) {
        let curEl = arr[i];
        result[i] = curEl;
    }

    console.log(result.reverse().join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);