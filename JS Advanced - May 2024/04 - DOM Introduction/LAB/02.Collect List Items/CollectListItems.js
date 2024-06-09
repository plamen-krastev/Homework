function extractText() {
  let refLi = document.getElementById("items").children;
  let refTextArea = document.getElementById("result");

  let textContent = "";
  for (let el of refLi) {
    textContent += el.textContent + "\n";
  }

  refTextArea.textContent = textContent;
}
