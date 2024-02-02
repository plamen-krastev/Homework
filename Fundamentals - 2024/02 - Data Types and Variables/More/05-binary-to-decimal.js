function binaryToDecimal(str) {
    let result = 0;
    let arrNumbers = [128, 64, 32, 16, 8, 4, 2, 1];
    if (str.length !== 8) {
        for (i = str.length - 1; i < 7; i++) {
            str += 0;
        }
    }
    for (let i = 0; i < str.length; i++) {
        let sign = str[i];
        if (sign === '1') {
            result += arrNumbers[i];
        }
    }
    
    console.log(result);
}

binaryToDecimal('11000');
// binaryToDecimal('11110000');
// binaryToDecimal('11110000');
// binaryToDecimal('11110001');