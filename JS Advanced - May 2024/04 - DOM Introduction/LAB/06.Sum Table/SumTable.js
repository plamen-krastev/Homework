function sumTable() {
  const refTD = document.querySelectorAll("tbody tr td");
  const refSum = document.getElementById("sum");
  let sum = 0;
  for (let i = 1; i < refTD.length - 2; i += 2) {
    let curNum = Number(refTD[i].textContent);
    sum += curNum;
  }
  refSum.textContent = sum;
}
