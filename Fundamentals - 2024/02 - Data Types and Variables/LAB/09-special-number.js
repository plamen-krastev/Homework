function solve(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let curNumAsString = i.toString();
        for (let j = 0; j < curNumAsString.length; j++) {
            let curNum = Number(curNumAsString[j]);
            sum += curNum;
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

solve(15);
// solve(20);