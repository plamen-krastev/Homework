function attachGradientEvents() {
  // get reference and add events listener
  const gradientRef = document.querySelector("#gradient");
  const resultDivElementRef = document.querySelector("#result");
  gradientRef.addEventListener("mousemove", gradientMove);
  gradientRef.addEventListener("mouseout", gradientOut);

  // both functions
  function gradientMove(event) {
    const gradientBoxWidth = event.target.clientWidth;
    const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
    const percentage = Math.trunc(positionOfTheMouse * 100);
    resultDivElementRef.textContent = percentage + "%";
  }
  function gradientOut() {
    resultDivElementRef.textContent = "";
  }
}
