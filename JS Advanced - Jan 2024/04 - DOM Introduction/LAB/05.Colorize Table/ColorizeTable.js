function colorize() {
  // TODO
  let rows = document.querySelectorAll("table tr");
  for (let index = 1; index < rows.length; index += 2) {
    rows[index].style.background = "teal";
  }
}
