function palindromeIntegers(numbers) {
    let reversedNumbers = convertAndReverse(numbers);
    let result = compareAndPrint(numbers, reversedNumbers);

    function compareAndPrint(forwardNumbers, backwardNumbers) {
        for (let i = 0; i < forwardNumbers.length; i++) {
            let forwardNum = forwardNumbers[i];
            let backwardNum = backwardNumbers[i];
            if (forwardNum === backwardNum) {
                console.log(true);
            } else {
                console.log(false);
            }
        }
    }

    function convertAndReverse(numbers) {
        let reversedNumbers = [];

        for (let num of numbers) {
            let numAsString = num
                .toString()
                .split('')
                .reverse()
                .join('');
            let curNum = Number(numAsString);
            reversedNumbers.push(curNum);
        }
        return reversedNumbers;
    }
}

// palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);