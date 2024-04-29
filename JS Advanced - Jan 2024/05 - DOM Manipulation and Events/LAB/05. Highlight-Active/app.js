function focused() {
  let divRef = document.querySelectorAll("div div");
  for (let div of divRef) {
    div.addEventListener("mouseover", highlight);
    div.addEventListener("mouseout", clearHighlight);
  }
  function highlight(even) {
    even.currentTarget.classList.toggle("focused");
  }
  function clearHighlight(even) {
    even.currentTarget.classList.remove("focused");
  }
}
