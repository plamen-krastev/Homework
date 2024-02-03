function nxnMatrix(num) {
    for (let row = 1; row <= num; row++) {
        let numAsString = num.toString() + ' ';
        console.log(numAsString.repeat(num));
    }
}

nxnMatrix(3);
// nxnMatrix(7);
// nxnMatrix(2);