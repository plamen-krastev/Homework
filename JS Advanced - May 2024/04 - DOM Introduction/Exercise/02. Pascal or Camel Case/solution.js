function solve() {
  const getInputText = document.getElementById("text").value;
  const getConvention = document.getElementById("naming-convention").value;
  const refResult = document.getElementById("result");

  let splitText = getInputText.split(" ").map((el) => el.toLowerCase());
  let result = [];

  if (getConvention === "Camel Case") {
    for (let i = 0; i < splitText.length; i++) {
      let curWord = splitText[i];
      if (i === 0) {
        result.push(curWord);
      } else {
        let word = curWord[0].toUpperCase() + curWord.slice(1);
        result.push(word);
      }
    }
    refResult.textContent = result.join("");
  } else if (getConvention === "Pascal Case") {
    for (let word of splitText) {
      word = word[0].toUpperCase() + word.slice(1);
      result.push(word);
    }
    refResult.textContent = result.join("");
  } else {
    refResult.textContent = "Error!";
  }
}
