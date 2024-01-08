function sumEvenNum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = Number(arr[i]);
        if (temp % 2 == 0) {
            sum += temp;
        }
    }
    console.log(sum);
}

sumEvenNum (['1','2','3','4','5','6']);
sumEvenNum (['3','5','7','9']);
sumEvenNum (['2','4','6','8','10']);