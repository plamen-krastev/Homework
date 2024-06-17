function deleteByEmail() {
  const inputRef = document.querySelector("input[name='email']");
  const cellsRef = document.querySelectorAll("table tbody tr td");
  const resultRef = document.querySelector("#result");

  const searchedEmail = inputRef.value;

  for (let cell of cellsRef) {
    if (searchedEmail !== "") {
      if (cell.textContent.includes(searchedEmail)) {
        let parentElement = cell.parentElement;
        parentElement.remove();
        resultRef.textContent = "Deleted.";
        break;
      } else {
        resultRef.textContent = "Not found.";
      }
    }
  }
}
