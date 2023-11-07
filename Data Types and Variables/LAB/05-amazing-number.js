function amazingNumber(num) {
    // convert to string
    let numAsString = String(num);
    // find sum
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let curNum = Number(numAsString[i]);
        sum += curNum;
    }

    //find is there is 9 in the sum
    let sumAsString = String(sum);
    let isAmazing = false;

    for (let x = 0; x < sumAsString.length; x++) {
        let checkForNine = Number(sumAsString[x]);
        if (checkForNine == 9) {
            isAmazing = true;
        }
    }

    console.log(isAmazing ? `${num} Amazing? True` : `${num} Amazing? False`);

}

amazingNumber (1233);
amazingNumber (999);
amazingNumber (991);