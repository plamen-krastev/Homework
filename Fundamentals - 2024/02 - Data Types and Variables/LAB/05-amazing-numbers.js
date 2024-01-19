function solve(num) {

    let numToString = num.toString();
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let curNum = Number(numToString[i]);
        sum += curNum;
    }

    let sumToString = sum.toString();
    let amazing = 'False';

    for (let i = 0; i < sumToString.length; i++) {
        let curChar = sumToString[i];
        if (curChar === '9') {
            amazing = 'True';
            break;
        }
    }

    console.log(`${num} Amazing? ${amazing}`);
}

solve(1233);
solve(999);