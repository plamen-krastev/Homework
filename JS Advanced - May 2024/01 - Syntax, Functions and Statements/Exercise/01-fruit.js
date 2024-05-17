function fruit(fruitType, weight, price) {
  let weightPerKilo = weight / 1000;
  let money = price * weightPerKilo;
  console.log(
    `I need $${money.toFixed(2)} to buy ${weightPerKilo.toFixed(
      2
    )} kilograms ${fruitType}.`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
