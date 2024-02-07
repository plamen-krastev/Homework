function sumFirstAndLast(arrayNumbers) {
    let lastIndex = arrayNumbers.length - 1;
    let sum = Number(arrayNumbers[0]) + Number(arrayNumbers[lastIndex]);
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);