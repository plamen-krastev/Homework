function toggle() {
  const refSpan = document.querySelector(".button");
  const refText = document.getElementById("extra");

  refSpan.textContent = refSpan.textContent === "More" ? "Less" : "More";
  if (refSpan.textContent === "Less") {
    refText.style.display = "block";
  } else {
    refText.style.display = "none";
  }
}
