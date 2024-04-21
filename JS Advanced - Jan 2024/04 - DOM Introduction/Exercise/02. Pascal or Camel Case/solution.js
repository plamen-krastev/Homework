function solve() {
  const text = document.getElementById("text").value;
  const nameConvention = document.getElementById("naming-convention").value;
  const finalWord = document.getElementById("result");

  let words = text.toLowerCase().split(" ");

  let result = "";
  switch (nameConvention) {
    case "Camel Case":
      let firstWord = words.shift();
      result = firstWord;
      for (let word of words) {
        let firstLetter = word[0].toUpperCase();
        result += firstLetter + word.slice(1);
      }
      finalWord.textContent = result;
      break;
    case "Pascal Case":
      for (let word of words) {
        let firstLetter = word[0].toUpperCase();
        result += firstLetter + word.slice(1);
      }
      finalWord.textContent = result;
      break;
    default:
      finalWord.textContent = "Error!";
      break;
  }
}
