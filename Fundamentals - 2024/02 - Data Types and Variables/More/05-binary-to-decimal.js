function binaryToDecimal(str) {
    let result = 0;
    let arrNumbers = [128, 64, 32, 16, 8, 4, 2, 1];

    for (let i = 0; i < str.length; i++) {
        let sign = str[i];
        if (sign === '1') {
            result += arrNumbers[i];
        }
    }
    console.log(result);
}

binaryToDecimal('00001001');
binaryToDecimal('00000111');
binaryToDecimal('11110000');
binaryToDecimal('11110001');