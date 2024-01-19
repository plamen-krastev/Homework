function solve(num1, num2, num3) {

    result = num1 + num2 + num3;
    let type = '';
    if (result % 1 === 0) {
        type = 'Integer';
    } else {
        type = 'Float';
    }
    console.log(`${result} - ${type}`);
}

solve(9, 100, 1.1);
solve(100, 200, 303);