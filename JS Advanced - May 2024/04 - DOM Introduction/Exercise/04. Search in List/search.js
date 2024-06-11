function search() {
  const refUl = document.getElementById("towns");
  const refSearch = document.getElementById("searchText");
  const refResult = document.getElementById("result");

  let searchedText = refSearch.value;
  const liElementCollection = refUl.children;
  let matchCount = 0;

  if (searchedText !== "") {
    for (let el of liElementCollection) {
      if (el.textContent.includes(searchedText)) {
        el.style.fontWeight = "bold";
        el.style.textDecoration = "underline";
        matchCount++;
      }
    }
  }

  if (matchCount > 0) {
    refResult.textContent = `${matchCount} matches found`;
  }
  refSearch.value = "";
}
