function validate() {
  const inputRef = document.querySelector("#email");
  inputRef.addEventListener("change", changeEventHandler);

  const emailRegexPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

  function changeEventHandler(event) {
    const curTarget = event.currentTarget;
    const email = curTarget.value;
    emailRegexPattern.test(email)
      ? curTarget.classList.remove("error")
      : curTarget.classList.add("error");
  }
}
