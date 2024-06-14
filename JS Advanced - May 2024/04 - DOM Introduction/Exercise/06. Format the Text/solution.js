function solve() {
  const refResultDiv = document.querySelector("#output");
  const refInputTextArea = document.querySelector("#input");

  const inputText = refInputTextArea.value;
  if (inputText.length) {
    const sentences = inputText.split(".").filter((el) => el.length > 0);

    for (let i = 0; i < sentences.length; i += 3) {
      let pElement = document.createElement("p");
      for (let j = 0; j < 3; j++) {
        let index = i + j;
        if (index < sentences.length) {
          let sentence = sentences[index];
          pElement.textContent += sentence + ".";
        }
      }
      refResultDiv.appendChild(pElement);
    }
  }
}
