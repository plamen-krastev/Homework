function oddAndEvenSum(number) {

    let [oddSum, evenSum] = sumOfOddAndEven(number);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function sumOfOddAndEven(num) {
        let numString = num.toString();
        let oddSum = 0;
        let evenSum = 0;

        for (let digit of numString) {
            let curNum = Number(digit);
            if (curNum % 2 !== 0) {
                oddSum += curNum;
            } else {
                evenSum += curNum;
            }
        }
        let resultArray = [oddSum, evenSum];
        return resultArray;
    }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);