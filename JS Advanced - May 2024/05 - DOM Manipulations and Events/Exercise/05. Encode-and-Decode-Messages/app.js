function encodeAndDecodeMessages() {
  // getting references
  const bothDivRef = document.querySelectorAll("#main div");
  const encodeMessageTextRef = bothDivRef[0].children[1];
  const encodeMessageButtonRef = bothDivRef[0].children[2];
  const decodeMessageTextRef = bothDivRef[1].children[1];
  const decodeMessageButtonRef = bothDivRef[1].children[2];

  // add event listeners
  encodeMessageButtonRef.addEventListener("click", encodeMessage);
  decodeMessageButtonRef.addEventListener("click", decodeMessage);

  function encodeMessage() {
    let encodeMessageText = "";
    const message = encodeMessageTextRef.value;
    for (let letter of message) {
      let encodeLetterCharCode = letter.charCodeAt() + 1;
      let encodeLetter = String.fromCharCode(encodeLetterCharCode);
      encodeMessageText += encodeLetter;
    }

    encodeMessageTextRef.value = "";
    decodeMessageTextRef.value = encodeMessageText;
    // encodeMessageButtonRef.disabled = true;
    decodeMessageButtonRef.disabled = false;
  }

  function decodeMessage() {
    let decodeMessageText = "";
    const message = decodeMessageTextRef.value;
    for (let letter of message) {
      let decodeLetterCharCode = letter.charCodeAt() - 1;
      let decodeLetter = String.fromCharCode(decodeLetterCharCode);
      decodeMessageText += decodeLetter;
    }
    decodeMessageTextRef.value = decodeMessageText;
    decodeMessageButtonRef.disabled = true;
  }
}
