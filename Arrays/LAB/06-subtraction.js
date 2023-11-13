function subtraction(arr) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];

        if (temp % 2 == 0) {
            sumEven += temp;
        } else {
            sumOdd += temp;
        }
    }

    let result = sumEven - sumOdd;
    console.log(result);
}

subtraction ([1,2,3,4,5,6]);
subtraction ([3,5,7,9]);
subtraction ([2,4,6,8,10]);