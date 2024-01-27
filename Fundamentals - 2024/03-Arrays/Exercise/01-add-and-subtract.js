function solve(arr) {

    let result = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        originalSum += curNum;
        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }
        modifiedSum += curNum;
        result.push(curNum);
    }

    console.log(result);
    console.log(originalSum);
    console.log(modifiedSum);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);