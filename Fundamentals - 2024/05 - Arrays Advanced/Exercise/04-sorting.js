function sorting(numbers) {

    let sortedNumbers = [];
    numbers.sort((a, b) => a - b);

    while (numbers.length > 0) {

        let biggest = numbers.pop();
        sortedNumbers.push(biggest);

        if (numbers.length > 0) {
            let smallest = numbers.shift();
            sortedNumbers.push(smallest);
        }
    }
    console.log(sortedNumbers);
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);