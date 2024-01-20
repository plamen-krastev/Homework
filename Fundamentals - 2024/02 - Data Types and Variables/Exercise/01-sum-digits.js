function solve(num) {

    let numToString = num.toString();
    let sum = 0;

    for (let char of numToString) {
        let curNum = Number(char);
        sum += curNum;
    }
    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);