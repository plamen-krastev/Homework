function solve(arr1, arr2) {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let curNumArr1 = arr1[i];
        let curNumArr2 = arr2[i];

        if (i % 2 === 0) {
            let sum = Number(curNumArr1) + Number(curNumArr2);
            result.push(sum);
        } else {
            sum = curNumArr1 + curNumArr2;
            result.push(sum);
        }
    }
    console.log(result.join(' - '));
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
solve(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);