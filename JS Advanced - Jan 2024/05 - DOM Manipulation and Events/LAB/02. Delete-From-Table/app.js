function deleteByEmail() {
  // getting email
  let email = document.getElementsByName("email")[0].value;
  let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
  for (let cell of secondColumn) {
    if (cell.textContent === email) {
      let row = cell.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById("result").textContent = "Deleted";
      return;
    } else {
      document.getElementById("result").textContent = "Not found.";
    }
  }
}
