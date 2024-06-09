function calc() {
  let refNum1 = document.getElementById("num1");
  let refNum2 = document.getElementById("num2");
  let refSum = document.getElementById("sum");

  let num1 = Number(refNum1.value);
  let num2 = Number(refNum2.value);

  let sum = num1 + num2;

  refSum.value = sum;
}
