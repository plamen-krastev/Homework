function bombNumbers(numbers, bomb) {
    let [bombNum, power] = bomb;
    let countBomb = numbers.filter(x => x === bombNum);

    for (let i = 1; i <= countBomb.length; i++) {

        let index = numbers.indexOf(bombNum);
        if (index === -1) {
            break;
        }

        let startIndex = index - power;
        let elements = 2 * power + 1;
        if (startIndex < 0) {
            elements += start;
            startIndex = 0;
        }
        numbers.splice(startIndex, elements);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    console.log(sum);
}

// bombNumbers(
//   [1, 2, 2, 4, 2, 2, 2, 9],
//   [4, 2]
// );
// bombNumbers(
//   [1, 4, 4, 2, 8, 9, 1],
//   [9, 3]
// );
bombNumbers(
  [1, 7, 7, 1, 2, 3],
  [7, 1]
);
// bombNumbers(
//   [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//   [2, 1]
// );