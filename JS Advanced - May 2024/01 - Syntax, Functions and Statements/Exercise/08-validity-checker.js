function validityChecker(x1, y1, x2, y2) {
  let status = "";

  let firstCheck = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
  let secondCheck = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  let thirdCheck = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  let isInteger = Number.isInteger(firstCheck);
  isInteger ? (status = "valid") : (status = "invalid");
  console.log(`{${x1}, ${y1}} to {0, 0} is ${status}`);

  isInteger = Number.isInteger(secondCheck);
  isInteger ? (status = "valid") : (status = "invalid");
  console.log(`{${x2}, ${y2}} to {0, 0} is ${status}`);

  isInteger = Number.isInteger(thirdCheck);
  isInteger ? (status = "valid") : (status = "invalid");
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
