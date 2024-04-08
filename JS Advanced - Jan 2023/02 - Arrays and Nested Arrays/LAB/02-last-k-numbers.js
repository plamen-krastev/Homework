function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (j = 0; j < k; j++) {
            let curIndex = i - k + j;
            if (curIndex < 0) {
                continue;
            } else {
                sum += result[curIndex];
            }
        }
        result.push(sum);
    }
    return result;
}

console.log(solve(6, 3));
console.log(solve(8, 2));