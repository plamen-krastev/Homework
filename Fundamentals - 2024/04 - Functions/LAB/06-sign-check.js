function signCheck(num1, num2, num3) {

    let arrNumbers = [num1, num2, num3];

    // getting count of negative number
    let result = arrNumbers.filter((number) => number < 0).length;
    let checkForZero = arrNumbers.filter((number) => number === 0).length;

    if (result === 1 || result === 3 && checkForZero === 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
    // console.log(checkForZero);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-6, 12, 14);
signCheck(-6, -12, 0);