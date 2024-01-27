function solve(num) {

    let numToStr = num.toString();
    let lastInd = numToStr.length;
    let lastNum = Number(numToStr[lastInd - 1]);

    let arrOfNum = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];

    console.log(arrOfNum[lastNum]);

}

solve(512);
solve(1);
solve(1643);
solve(16430);