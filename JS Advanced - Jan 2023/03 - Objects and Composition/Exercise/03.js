function solve({model, power, color, carriage, wheelsize}) {
    let car = {
        model,
        engine: {},
        carriage: {},
        wheels: []
    }

    if (power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        }
    } else if (power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }

    car.carriage = {
        type: carriage,
        color: color
    }

    if (wheelsize % 2 === 0) {
        wheelsize--;
    }

    car.wheels = Array(4).fill(wheelsize);
    return car;
}

console.log(
    solve({model: "VW Golf II", power: 90, color: "blue", carriage: "hatchback", wheelsize: 14})
);
console.log(
    solve({model: "Opel Vectra", power: 110, color: "grey", carriage: "coupe", wheelsize: 17})
);
