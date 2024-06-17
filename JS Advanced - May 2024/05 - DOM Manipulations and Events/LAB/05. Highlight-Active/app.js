function focused() {
  // getting reference for all "div" elements
  const inputsRef = document.querySelectorAll("div div");

  // adding events listeners for all "div" elements
  for (let divEl of inputsRef) {
    divEl.addEventListener("focus", highlight);
    divEl.addEventListener("blur", clearHighlight);
  }

  function highlight(e) {
    e.currentTarget.classList.add("focused");
  }
  function clearHighlight(e) {
    e.currentTarget.classList.remove("focused");
  }
}
