function solve(input) {
  if (typeof input === "number") {
    let circleArea = Math.PI * input ** 2;
    console.log(circleArea.toFixed(2));
  } else {
    let type = typeof input;
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}

solve(5);
solve("name");
