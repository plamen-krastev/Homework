function solve (n1, n2, n3) {

  function sum (a, b) {
    let sumResult = a + b;
    return sumResult;
  }

  function substract (a, b) {
    let substractResult = a - b;
    return substractResult;
  }

  let resultSum = sum (n1, n2);
  let resultSubstract = substract (resultSum, n3);
  
  console.log(resultSubstract);

}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);