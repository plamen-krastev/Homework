function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const refTbody = document.querySelectorAll("table tbody tr");
    const refSearchField = document.querySelector("#searchField");
    const searchedText = refSearchField.value;

    for (let row of refTbody) {
      row.classList.remove("select");
    }

    for (let row of refTbody) {
      for (let cell of row.children) {
        let cellTextContent = cell.textContent;
        if (cellTextContent.includes(searchedText)) {
          cell.parentElement.classList.add("select");
        }
      }
    }
    refSearchField.value = "";
  }
}
