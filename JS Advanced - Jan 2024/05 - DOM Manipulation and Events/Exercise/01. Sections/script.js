function create(words) {
  // getting reference
  const contentRef = document.getElementById("content");

  for (let word of words) {
    // creating both elements
    let divEl = document.createElement("div");
    let pEl = document.createElement("p");

    // adding text in pEl and set display to "none"
    pEl.textContent = word;
    pEl.style.display = "none";

    // append elements
    divEl.appendChild(pEl);
    contentRef.appendChild(divEl);

    // adding listener
    divEl.addEventListener("click", clickHandler);
  }
  function clickHandler(event) {
    // getting target (div element)
    let target = event.currentTarget;
    // getting child elements
    let children = target.children;
    // getting child (p element)
    let p = children[0];
    p.style.display = "block";
  }
}
