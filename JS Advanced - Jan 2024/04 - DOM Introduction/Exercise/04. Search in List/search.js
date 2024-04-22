function search() {
  let searchItem = document.getElementById("searchText").value;
  const arrayFromElements = Array.from(document.getElementById("towns").children);
  let matches = 0;
  for (let town of arrayFromElements) {
    if (town.textContent.includes(searchItem)) {
      console.log(typeof town.textContent);
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }
  }
  document.getElementById("searchText").value = "";
  document.getElementById("result").textContent = `${matches} matches found`;
}
