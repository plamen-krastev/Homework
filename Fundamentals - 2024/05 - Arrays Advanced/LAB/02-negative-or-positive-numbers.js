function negativeOrPositive(arr) {
    let arrNumbers = [];
    for (let num of arr) {
        let curNum = Number(num);
        if (curNum < 0) {
            arrNumbers.unshift(curNum);
        } else {
            arrNumbers.push(curNum)
        }
    }

    console.log(arrNumbers.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);