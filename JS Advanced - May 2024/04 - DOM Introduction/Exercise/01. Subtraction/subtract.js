function subtract() {
  const refFirstNum = document.getElementById("firstNumber");
  const refSecondNum = document.getElementById("secondNumber");
  const refResult = document.getElementById("result");

  let firstNum = Number(refFirstNum.value);
  let secondNum = Number(refSecondNum.value);
  let sum = firstNum - secondNum;

  refResult.textContent = sum;
}
