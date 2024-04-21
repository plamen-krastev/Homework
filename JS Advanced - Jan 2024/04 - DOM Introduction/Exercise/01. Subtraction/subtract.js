function subtract() {
  const num1Ref = document.querySelector("#firstNumber");
  const num2Ref = document.querySelector("#secondNumber");
  const result = document.querySelector("#result");

  let num1 = Number(num1Ref.value);
  let num2 = Number(num2Ref.value);
  let subtract = num1 - num2;
  result.textContent = subtract;
}
