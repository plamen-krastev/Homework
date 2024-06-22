function solve() {
  const addButtonRef = document.querySelectorAll(".add-product");
  const textAreaRef = document.querySelector("textarea");
  const checkoutRef = document.querySelector(".checkout");

  for (let currentButton of addButtonRef) {
    currentButton.addEventListener("click", addProduct);
  }

  let totalPrice = 0;
  let products = [];

  checkoutRef.addEventListener("click", checkoutOrder);

  function addProduct(e) {
    const curElement = e.currentTarget.parentElement.parentElement;
    const product = curElement.querySelector(".product-title").textContent;
    let price = curElement.querySelector(".product-line-price").textContent;
    price = Number(price);

    totalPrice += price;
    products.push(product);

    textAreaRef.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
  }

  function checkoutOrder(e) {
    let uniqueSet = new Set(products);
    const productList = Array.from(uniqueSet);

    textAreaRef.textContent += `You bought ${productList.join(", ")} for ${totalPrice.toFixed(2)}.`;

    for (let currentButton of addButtonRef) {
      currentButton.disabled = true;
    }
    e.currentTarget.disabled = true;
  }
}
