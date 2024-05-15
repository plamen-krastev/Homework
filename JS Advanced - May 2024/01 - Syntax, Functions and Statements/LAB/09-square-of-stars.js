function solve(num = 5) {
  for (let i = 0; i < num; i++) {
    console.log("* ".repeat(num).trimEnd());
  }
}

solve();
solve(1);
solve(2);
solve(7);
