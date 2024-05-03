function validate() {
  const refEmail = document.getElementById("email");
  const getText = refEmail.value;
  let regexPattern =
    /([A-Za-z0-9_]{2,})@([A-Za-z0-9_]{2,}).([A-Za-z0-9_]{2,})/g;
  let match = getText.match(regexPattern);

//   refEmail.addEventListener("focus", checkEmail);
  refEmail.addEventListener("blur", checkEmail);
  function checkEmail(event) {
    if (match === null) {
      event.currentTarget.classList.toggle("error");
    } 
  }
  console.log(match);
}

// validate("asdasdasfdsaf@sdfsaf.vom");
