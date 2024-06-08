function solve(data) {
  let operands = [];
  let operators = [];

  for (let i = 0; i < data.length; i++) {
    let curSymbol = data[i];
    if (typeof curSymbol === "number") {
      operands.push(curSymbol);
    } else {
      operators.push(curSymbol);
    }
  }

  let operandsCount = operands.length;
  let operatorsCount = operators.length;

  if (operandsCount > operatorsCount + 1) {
    console.log("Error: too many operands!");
  } else if (operandsCount < operatorsCount + 1) {
    console.log("Error: not enough operands!");
  } else {
    let result;

    let calculator = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    let tmpNumbers = [];

    while (data.length > 0) {
      let curSymbol = data.shift();
      if (typeof curSymbol === "number") {
        tmpNumbers.push(curSymbol);
      } else {
        if (result === undefined) {
          let firstNum = tmpNumbers.pop();
          let secondNum = tmpNumbers.pop();
          result = calculator[curSymbol](secondNum, firstNum);
          tmpNumbers.push(result);
        } else {
          let firstNum = tmpNumbers.pop();
          let secondNum = tmpNumbers.pop();
          result = calculator[curSymbol](secondNum, firstNum);
          tmpNumbers.push(result);
        }
      }
    }
    console.log(result);
  }
}

solve([3, 4, "+"]);
solve([5, 3, 4, "*", "-"]);
solve([7, 33, 8, "-"]);
solve([15, "/"]);

solve([31, 2, "+", 11, "/"]);
solve([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);
