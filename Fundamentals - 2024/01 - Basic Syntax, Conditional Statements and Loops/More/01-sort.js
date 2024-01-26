function sorting(num1, num2, num3) {
    let arrNum = [num1, num2, num3];
    arrNum.sort((a, b) => (b - a));

    for (let num of arrNum) {
        console.log(num);
    }
}

// sorting(2, 1, 3);
// sorting(-2, 1, 3);
sorting(0, 0, 2);