function addItem() {
  const liRef = document.querySelector("#items");
  const textAreaRef = document.querySelector("#newItemText");
  const text = textAreaRef.value;
  const liElement = document.createElement("li");
  liElement.textContent = text;
  liRef.appendChild(liElement);

  textAreaRef.value = "";
}
