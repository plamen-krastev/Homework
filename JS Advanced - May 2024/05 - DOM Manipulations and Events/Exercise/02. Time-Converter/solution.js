function attachEventsListeners() {
  // 24 hours / 1440 minutes / 86400 seconds

  const daysRef = document.querySelector("#days");
  const hoursRef = document.querySelector("#hours");
  const minutesRef = document.querySelector("#minutes");
  const secondsRef = document.querySelector("#seconds");

  const dayButtonRef = document.querySelector("#daysBtn");
  const hoursButtonRef = document.querySelector("#hoursBtn");
  const minutesButtonRef = document.querySelector("#minutesBtn");
  const secondsButtonRef = document.querySelector("#secondsBtn");

  dayButtonRef.addEventListener("click", daysEventHandler);
  hoursButtonRef.addEventListener("click", hoursEventHandler);
  minutesButtonRef.addEventListener("click", minutesEventHandler);
  secondsButtonRef.addEventListener("click", secondsEventHandler);

  function daysEventHandler() {
    const days = Number(daysRef.value);

    hoursRef.value = days * 24;
    minutesRef.value = days * 24 * 60;
    secondsRef.value = days * 24 * 60 * 60;
  }

  function hoursEventHandler() {
    const hours = Number(hoursRef.value);

    daysRef.value = hours / 24;
    minutesRef.value = hours * 60;
    secondsRef.value = hours * 60 * 60;
  }

  function minutesEventHandler() {
    const minutes = Number(minutesRef.value);

    daysRef.value = minutes / 60 / 24;
    hoursRef.value = minutes / 60;
    secondsRef.value = minutes * 60;
  }

  function secondsEventHandler() {
    const seconds = Number(secondsRef.value);

    daysRef.value = seconds / 60 / 60 / 24;
    hoursRef.value = seconds / 60 / 60;
    minutesRef.value = seconds / 60;
  }
}

// function attachEventsListeners() {
//   // get all input buttons
//   let buttons = Array.from(document.querySelectorAll("input[type='button']"));
//   // get all input text
//   let inputTexts = Array.from(document.querySelectorAll("input[type='text']"));

//   for (let button of buttons) {
//     button.addEventListener("click", clickHandler);
//   }

//   function clickHandler(event) {
//     let target = event.currentTarget;
//     let currentUnitInput = target.parentElement.children[1];
//     let value = Number(currentUnitInput.value);
//     let id = currentUnitInput.id;

//     switch (id) {
//       case "days":
//         propagateNeValue(value);
//         break;
//       case "hours":
//         propagateNeValue(value / 24);
//         break;
//       case "minutes":
//         propagateNeValue(value / 24 / 60);
//         break;
//       case "seconds":
//         propagateNeValue(value / 24 / 60 / 60);
//         break;
//     }
//   }

//   function propagateNeValue(value) {
//     inputTexts[0].value = value;
//     inputTexts[1].value = value * 24;
//     inputTexts[2].value = value * 24 * 60;
//     inputTexts[3].value = value * 24 * 60 * 60;
//   }
// }