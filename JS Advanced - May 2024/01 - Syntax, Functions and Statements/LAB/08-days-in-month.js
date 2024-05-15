function solve(month, year) {
  let date = new Date(year, month, 0);
  console.log(date.getDate());
}

solve(1, 2012);
solve(2, 2021);
solve(2, 2024);
solve(12, 2021);
