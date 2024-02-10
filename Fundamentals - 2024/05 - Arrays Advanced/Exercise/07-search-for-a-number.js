function search(input, arrCommand) {
    let getElements = arrCommand[0];
    let deleteElements = arrCommand[1];
    let searchNumber = arrCommand[2];

    let result = [];

    for (let i = 0; i < getElements; i++) {
        result.push(input[i]);
    }
    for (let i = 0; i < deleteElements; i++) {
        result.shift();
    }

    result = result.filter(x => x === searchNumber);

    console.log(`Number ${searchNumber} occurs ${result.length} times.`);
}

search(
  [5, 2, 3, 4, 1, 6],
  [5, 2, 3]
);
search(
  [7, 1, 5, 8, 2, 7],
  [3, 1, 5]
);