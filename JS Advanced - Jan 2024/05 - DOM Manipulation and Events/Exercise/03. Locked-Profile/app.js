function lockedProfile() {
  let buttons = Array.from(document.querySelectorAll("button")); // array of buttons
  buttons.forEach((x) => x.addEventListener("click", clickHandler)); // added listener on each button

  function clickHandler(event) {
    let target = event.currentTarget; // getting clicked button
    let hiddenInfo = target.parentElement.querySelector("div"); // getting hidden info
    let inputRadioChecked = target.parentElement.querySelector("input[type='radio']:checked"); // getting radio button state

    if (inputRadioChecked.value === "unlock") {
      target.textContent = target.textContent === "Show more" ? "Hide it" : "Show more";
      hiddenInfo.style.display = hiddenInfo.style.display === "block" ? "none" : "block";
    }
  }
}
