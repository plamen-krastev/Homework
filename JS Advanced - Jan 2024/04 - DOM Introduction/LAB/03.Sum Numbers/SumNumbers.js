function calc() {
    // TODO: sum = num1 + num2
    // get ref to num1, num2 and sum
    const refNum1 = document.getElementById('num1');
    const refNum2 = document.getElementById('num2');
    const refSum = document.getElementById('sum');

    // do operation
    const sum = Number(refNum1.value) + Number(refNum2.value);
    // print result
    refSum.value = sum;
}
