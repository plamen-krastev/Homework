function focused() {
  let divRef = Array.from(document.querySelectorAll("div div"));
  for (let div of divRef) {
    div.addEventListener("focus", highlight);
    div.addEventListener("blur", clearHighlight);
  }
  function highlight(even) {
    even.currentTarget.classList.toggle("focused");
  }
  function clearHighlight(even) {
    even.currentTarget.classList.remove("focused");
  }
}
