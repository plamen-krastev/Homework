function addItem() {
  // getting references
  const selectRef = document.querySelector("#menu");
  const newItemTextRef = document.querySelector("#newItemText");
  const newItemValueRef = document.querySelector("#newItemValue");

  // getting inputs
  let inputText = newItemTextRef.value;
  let inputValue = newItemValueRef.value;

  // creating option element and adding text and value
  let optionElement = document.createElement("option");
  optionElement.textContent = inputText;
  optionElement.value = inputValue;

  // append element
  selectRef.appendChild(optionElement);

  // clear text and value
  newItemTextRef.value = "";
  newItemValueRef.value = "";
}
