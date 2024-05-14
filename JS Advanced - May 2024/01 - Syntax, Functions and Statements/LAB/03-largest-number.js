function solve(num1, num2, num3) {
  let number = 0;
  if (num1 >= num2 && num1 >= num3) {
    number = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    number = num2;
  } else {
    number = num3;
  }

  console.log(`The largest number is ${number}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);
