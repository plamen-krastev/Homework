function toggle() {
  const refToButton = document.getElementsByClassName("button")[0];
  const refToExtra = document.getElementById("extra");

  if (refToButton.textContent === "More") {
    refToExtra.style.display = "block";
    refToButton.textContent = "Less";
  } else {
    refToExtra.style.display = "none";
    refToButton.textContent = "More";
  }
}