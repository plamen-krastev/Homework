function addItem() {
  const text = document.getElementById("newItemText").value;
  const li = document.createElement("li");
  //   li.appendChild(document.createTextNode(text));
  li.textContent = text;
  //   console.log(li.textContent);
  const parentElement = document.getElementById("items");
  parentElement.appendChild(li);
  document.getElementById("newItemText").value = "";
  // create new element, adding text and append it to the parent element

  //   if (text) {
  //     newLiElement.textContent = text;
  //     parentElement.append(newLiElement);
  //     addElement.value = "";
  //   }
  //   newLiElement.textContent = text;
  //   parentElement.append(newLiElement);
}
