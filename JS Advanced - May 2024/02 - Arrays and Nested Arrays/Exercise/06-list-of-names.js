function listOfNames(data) {
  data
    .sort((a, b) => a.localeCompare(b))
    .forEach((el, idx) => console.log(`${idx + 1}.${el}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
