function carFactory(requirement) {
  let car = {};

  car.model = requirement.model;

  let engines = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 },
  };
  const power = requirement.power;
  if (power <= 90) {
    car.engine = engines.small;
  } else if (power <= 120) {
    car.engine = engines.normal;
  } else {
    car.engine = engines.monster;
  }

  car.carriage = {
    type: requirement.carriage,
    color: requirement.color,
  };

  const wheelsize =
    requirement.wheelsize % 2 == 0
      ? requirement.wheelsize - 1
      : requirement.wheelsize;
  car.wheels = Array(4).fill(wheelsize);
  
  return car;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
