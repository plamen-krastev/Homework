function addItem() {
  // getting text, creating element and getting reference to the parent "ul" element
  const text = document.querySelector("#newItemText").value;
  const liElement = document.createElement("li");
  const ulElement = document.querySelector("#items");

  if (text.length === 0) return;

  // add "li" element and reset value
  liElement.textContent = text;
  ulElement.appendChild(liElement);
  document.querySelector("#newItemText").value = "";

  // create "a" element, adding text for it, adding link for it, append it to the "li" element end add event listener for it
  const aElement = document.createElement("a");
  const aElementText = document.createTextNode("[Delete]");
  aElement.href = "#";
  aElement.appendChild(aElementText);
  liElement.appendChild(aElement);
  aElement.addEventListener("click", deleteLiItem);

  // create delete function
  function deleteLiItem() {
    liElement.remove();
  }
}
