function constructionCrew(worker) {
  if (worker.dizziness === true) {
    let waterToDrink = worker.experience * 0.1 * worker.weight;
    worker.levelOfHydrated += waterToDrink;
    worker.dizziness = false;
  }
  return worker;
}

console.log(
  constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);
console.log(
  constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);
console.log(
  constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);
