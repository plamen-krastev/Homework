function colorize() {
  const refTDElement = document.querySelectorAll("table tr");
  for (let i = 0; i < refTDElement.length; i++) {
    if (i % 2 !== 0) {
      refTDElement[i].style.background = "teal";
    }
  }
}
