function equalSums(arr) {
    let index = 0;
    let printOrNot = true;

    for (let i = 0; i < arr.length; i++) {

        let isEqual = false;
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i + 1; j < arr.length; j++) {
            let curnum = arr[j];
            rightSum += curnum;
        }
        for (let j = i - 1; j >= 0; j--) {
            let curnum = arr[j];
            leftSum += curnum;
        }
        if (leftSum == rightSum) {
            isEqual = true;
        }
        if (isEqual) {
            index = i;
            printOrNot = false;
            console.log(i);
        }
    }
    if (printOrNot) {
        console.log('no');
    }
}

equalSums ([1, 2, 3, 3]);
equalSums ([1, 2]);
equalSums ([1]);
equalSums ([1, 2, 3]);
equalSums ([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);