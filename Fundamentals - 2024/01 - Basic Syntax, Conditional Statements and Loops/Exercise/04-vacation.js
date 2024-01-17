function solve(count, type, day) {

    let price = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = count * 8.45;
            } else if (day === "Saturday") {
                price = count * 9.80;
            } else if (day === "Sunday") {
                price = count * 10.46;
            }

            if (count >= 30) {
                price *= 0.85;
            }
            break;

        case "Business":
            let singlePrice = 0;
            if (day === "Friday") {
                singlePrice = 10.90;
            } else if (day === "Saturday") {
                singlePrice = 15.60;
            } else if (day === "Sunday") {
                singlePrice = 16;
            }

            if (count >= 100) {
                price = (count - 10) * singlePrice;
            } else {
                price = count * singlePrice;
            }
            break;

        case "Regular":
            if (day === "Friday") {
                price = count * 15;
            } else if (day === "Saturday") {
                price = count * 20;
            } else if (day === "Sunday") {
                price = count * 22.50;
            }

            if (count >= 10 && count <= 20) {
                price *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");