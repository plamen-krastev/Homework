function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const searchInputRef = document.getElementById("searchField");
  const tbodyRows = document.querySelectorAll("tbody tr");

  function onClick() {
    //   TODO:
    let searchText = searchInputRef.value;
    for (let row of tbodyRows) {
      let cells = row.querySelectorAll("td");
      for (let cell of cells) {
        if (cell.textContent.includes(searchText)) {
          row.classList.add("select");
          break;
        }
      }
    }
    searchInputRef.value = "";
  }
}
