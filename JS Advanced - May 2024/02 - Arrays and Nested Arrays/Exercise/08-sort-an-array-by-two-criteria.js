function sortingByTwoCriteria(data) {
  data
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .forEach((el) => console.log(el));
}

sortingByTwoCriteria(["alpha", "beta", "gamma"]);
sortingByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortingByTwoCriteria(["test", "Deny", "omen", "Default"]);
