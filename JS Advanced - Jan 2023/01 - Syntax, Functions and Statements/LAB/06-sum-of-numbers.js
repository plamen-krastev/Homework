function solve(firstNum, lastNum) {
    let sum = 0;
    firstNum = Number(firstNum);
    lastNum = Number(lastNum);
    for (let i = firstNum; i <= lastNum; i++) {
        let curNum = i;
        sum += curNum;
    }
    console.log(sum);
}

solve('1', '5');
solve('-8', '20');