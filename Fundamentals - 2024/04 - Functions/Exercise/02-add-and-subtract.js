function addAndSubtract(num1, num2, num3) {

    let sum = add(num1, num2);
    let result = subtract(sum, num3);
    console.log(result);

    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);