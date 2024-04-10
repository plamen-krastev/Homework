function solve(data) {
    let result = [];
    let biggerNum = data[0];
    for (let i = 0; i < data.length; i++) {
        let curNum = data[i];
        if (result.length === 0) {
            result.push(curNum);
            biggerNum = curNum;
        } else {
            if (curNum >= biggerNum) {
                result.push(curNum);
                biggerNum = curNum;
            }
        }
    }
    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));
