function create(words) {
  const divContentRef = document.querySelector("#content");

  for (let word of words) {
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");

    divElement.addEventListener("click", displayPElement);

    pElement.textContent = word;
    pElement.style.display = "none";
    divElement.appendChild(pElement);
    divContentRef.appendChild(divElement);
  }

  function displayPElement(e) {
    let curPElement = e.currentTarget.firstChild;
    curPElement.style.display = "block";
    //  curPElement.style.display === "block"
    //    ? (curPElement.style.display = "none")
    //    : (curPElement.style.display = "block");
  }
}
