function solve(num1, num2, operator) {
    let mathOperation = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
        '%': num1 % num2,
        '**': Math.pow(num1, num2)
    }

    console.log(mathOperation[operator]);
}

solve(5, 6, '+');
solve(3, 5.5, '*');
solve(3, 3, '**');