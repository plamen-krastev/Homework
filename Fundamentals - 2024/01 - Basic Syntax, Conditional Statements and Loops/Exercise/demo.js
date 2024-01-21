function solve(num) {
  let result = 2 * num + 2 * (num - 2);
  let outerFormula = 4 * num - 4;
  console.log('Outer formula -> ' + result + ' = ' + outerFormula);

  let innerFormula = num * num - outerFormula;
  console.log("Inner formula -> " + innerFormula);
}

solve(7);
solve(11)