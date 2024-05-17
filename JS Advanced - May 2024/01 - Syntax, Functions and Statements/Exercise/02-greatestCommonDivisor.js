function solve(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
    // console.log(a);
  }

  console.log(a);
}

solve(15, 5);
solve(2154, 458);
