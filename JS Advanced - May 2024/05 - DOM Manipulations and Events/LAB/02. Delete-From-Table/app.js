function deleteByEmail() {
  const inputRef = document.querySelector("input[name='email']");
  const secondColumn = document.querySelectorAll(
    "#customers tr td:nth-child(2)"
  );
  //   const cellsRef = document.querySelectorAll("table tbody tr td");
  const resultRef = document.querySelector("#result");

  const searchedEmail = inputRef.value;

  for (let cell of secondColumn) {
    if (searchedEmail !== "") {
      if (cell.textContent.includes(searchedEmail)) {
        let parentElement = cell.parentElement;
        parentElement.remove();
        resultRef.textContent = "Deleted.";
        return;
      } else {
        resultRef.textContent = "Not found.";
      }
    }
  }
}
