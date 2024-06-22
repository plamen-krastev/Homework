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
