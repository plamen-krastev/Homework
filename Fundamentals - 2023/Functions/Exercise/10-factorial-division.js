function solve(num1, num2) {

    let firstNum = factorial(num1);
    let secondNum = factorial(num2);

    console.log((firstNum / secondNum).toFixed(2));

    function factorial(num) {
        let result = 1;

        for (let nums = 1; nums <= num; nums++) {
            result *= nums;
        }

        return result;
    }

}

solve (5, 2);
solve (6, 2);