function solve() {
  const textAreasRef = document.querySelectorAll("#exercise textarea");
  const inputTextAreaRef = textAreasRef[0];
  const buyTextAreaRef = textAreasRef[1];
  const buttonsRef = document.querySelectorAll("#exercise button");
  const generateButtonRef = buttonsRef[0];
  const buyButtonRef = buttonsRef[1];
  const tableBodyRef = document.querySelector("table tbody");

  generateButtonRef.addEventListener("click", generate);
  buyButtonRef.addEventListener("click", buy);

  function generate() {
    const inputArray = JSON.parse(inputTextAreaRef.value);

    for (let element of inputArray) {
      // create elements
      let imgElement = document.createElement("img");
      let pNameElement = document.createElement("p");
      let pPriceElement = document.createElement("p");
      let pDecorationFactorElement = document.createElement("p");

      // adding src and text content to the elements
      imgElement.src = element.img;
      pNameElement.textContent = element.name;
      pPriceElement.textContent = element.price;
      pDecorationFactorElement.textContent = element.decFactor;

      // creating tr and td elements and append elements
      let imgTdElement = document.createElement("td");
      imgTdElement.appendChild(imgElement);
      let nameTdElement = document.createElement("td");
      nameTdElement.appendChild(pNameElement);
      let priceTdElement = document.createElement("td");
      priceTdElement.appendChild(pPriceElement);
      let decorationFactorTdElement = document.createElement("td");
      decorationFactorTdElement.appendChild(pDecorationFactorElement);
      let checkboxElement = document.createElement("input");
      checkboxElement.type = "checkbox";
      let checkboxTdElement = document.createElement("td");
      checkboxTdElement.appendChild(checkboxElement);

      let trElement = document.createElement("tr");

      trElement.appendChild(imgTdElement);
      trElement.appendChild(nameTdElement);
      trElement.appendChild(priceTdElement);
      trElement.appendChild(decorationFactorTdElement);
      trElement.appendChild(checkboxTdElement);

      tableBodyRef.appendChild(trElement);
    }
  }

  function buy() {
    const checkedCheckboxesRef = Array.from(
      document.querySelectorAll("input[type='checkbox']:checked")
    );

    let namesArray = [];
    let totalPrice = 0;
    let decorationFactorsArray = [];

    for (let checkbox of checkedCheckboxesRef) {
      let trElement = checkbox.parentElement.parentElement;

      let allTdElements = trElement.childNodes;
      let name = allTdElements[1].firstChild.firstChild;
      namesArray.push(name.textContent);

      let price = allTdElements[2].firstChild.firstChild;
      price = Number(price.textContent);
      totalPrice += price;

      let decorationFactor = allTdElements[3].firstChild.firstChild;
      decorationFactor = Number(decorationFactor.textContent);
      decorationFactorsArray.push(decorationFactor);
    }

    let sum = decorationFactorsArray.reduce((accumulator, curValue) => accumulator + curValue, 0);
    let avrDecorationFactor = sum / decorationFactorsArray.length;
    buyTextAreaRef.textContent = `Bought furniture: ${namesArray.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avrDecorationFactor}`;
  }
}
