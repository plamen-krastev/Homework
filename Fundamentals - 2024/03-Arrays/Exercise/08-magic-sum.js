function solve(numbers, magicNum) {

    for (let i = 0; i < numbers.length; i++) {
        let curNum = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let secondNum = numbers[j];
            let sum = secondNum + curNum;
            if (sum === magicNum) {
                console.log(curNum, secondNum);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);

// solve([1, 7, 1, 6, 2, 2, 6, 23], 8);