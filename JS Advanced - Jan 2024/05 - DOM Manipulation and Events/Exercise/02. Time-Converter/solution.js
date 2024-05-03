function attachEventsListeners() {
  // get all input buttons
  let buttons = Array.from(document.querySelectorAll("input[type='button']"));
  // get all input text
  let inputTexts = Array.from(document.querySelectorAll("input[type='text']"));

  for (let button of buttons) {
    button.addEventListener("click", clickHandler);
  }

  function clickHandler(event) {
    let target = event.currentTarget;
    let currentUnitInput = target.parentElement.children[1];
    let value = Number(currentUnitInput.value);
    let id = currentUnitInput.id;

    switch (id) {
      case "days":
        propagateNeValue(value);
        break;
      case "hours":
        propagateNeValue(value / 24);
        break;
      case "minutes":
        propagateNeValue(value / 24 / 60);
        break;
      case "seconds":
        propagateNeValue(value / 24 / 60 / 60);
        break;
    }
  }

  function propagateNeValue(value) {
    inputTexts[0].value = value;
    inputTexts[1].value = value * 24;
    inputTexts[2].value = value * 24 * 60;
    inputTexts[3].value = value * 24 * 60 * 60;
  }
}
