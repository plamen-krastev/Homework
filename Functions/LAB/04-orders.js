function solve(product, qty) {
    let totalPrice = 0;

    switch (product) {
        case 'coffee':
            totalPrice = qty * 1.50;
            break;

        case 'coke':
            totalPrice = qty * 1.40;
            break;
        case 'water':
            totalPrice = qty * 1.00;
            break;
        case 'snacks':
            totalPrice = qty * 2.00;
            break;
    }

    console.log(totalPrice.toFixed(2));
}

solve ("water", 5);
solve ("coffee", 2);