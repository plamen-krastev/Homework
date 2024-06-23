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


// function create(words) {
//   // getting reference
//   const contentRef = document.getElementById("content");

//   for (let word of words) {
//     // creating both elements
//     let divEl = document.createElement("div");
//     let pEl = document.createElement("p");

//     // adding text in pEl and set display to "none"
//     pEl.textContent = word;
//     pEl.style.display = "none";

//     // append elements
//     divEl.appendChild(pEl);
//     contentRef.appendChild(divEl);

//     // adding listener
//     divEl.addEventListener("click", clickHandler);
//   }
//   function clickHandler(event) {
//     // getting target (div element)
//     let target = event.currentTarget; // .target can be p element
//     // getting child elements
//     let children = target.children;
//     // getting child (p element)
//     let p = children[0];
//     //  p.style.display = "block"; // as per condition
//     p.style.display = p.style.display === "none" ? "block" : "none";
//   }
// }