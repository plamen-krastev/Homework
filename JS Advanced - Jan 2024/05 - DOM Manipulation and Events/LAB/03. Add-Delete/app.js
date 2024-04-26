function addItem() {
  //getting text, creating element and getting reference to the parent element
  const text = document.getElementById("newItemText").value;
  const li = document.createElement("li");
  const parentElement = document.getElementById("items");

  if (text.length === 0) return;

  // add element and reset value
  li.textContent = text;
  parentElement.appendChild(li);
  document.getElementById("newItemText").value = "";

  // create element, adding text for it, append it, adding link end listener
  let remove = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");
  remove.appendChild(linkText);
  remove.href = "#";
  remove.addEventListener("click", deleteItem);

  li.appendChild(remove);

  function deleteItem() {
    li.remove();
  }
}
