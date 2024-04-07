function fruit(...data) {
    const typeOfFruit = data[0];
    const weight = data[1] / 1000;
    const money = data[2] * weight;

    console.log(
        `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`
    );
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);