function sorting(arr) {
    arr.sort((a, b) => a - b);
    let result = [];

    while (arr.length > 0) {
        let maxNum = arr.pop();
        result.push(maxNum);
        if (arr.length > 0) {
            let minNum = arr.shift();
            result.push(minNum);
        }
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);