function gcd(num1, num2) {
    let tmp = 0;
    while (num2 !== 0) {
        tmp = num2;
        num2 = num1 % num2;
        num1 = tmp;
    }
    let commonDivisor = tmp;
    console.log(commonDivisor);
}

gcd(15, 5);
gcd(2154, 458);