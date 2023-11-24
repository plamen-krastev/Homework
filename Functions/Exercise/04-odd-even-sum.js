function sum(num) {
    let numAsString = String(num);

    // let result = calculation(numAsString); 
    let [evenSum, oddSum] = calculation(numAsString);
    // print(result);
    print(evenSum, oddSum);

    function calculation(str) {

        let oddSum = 0;
        let evenSum = 0;

        // for (i = 0; i < numAsString.length; i++) {

        //     let curNum = Number(numAsString[i]);

        //     if (curNum % 2 == 0) {
        //         evenSum += curNum;
        //     } else {
        //         oddSum += curNum;
        //     }
        // }

        for (let num of str) {
            let curNum = Number(num);
            
            if (curNum % 2 == 0) {
                evenSum += curNum;
            } else {
                oddSum += curNum;
            }
        }

        return [oddSum, evenSum];
    }

    function print(evenSum, oddSum) {
        // console.log(`Odd sum = ${result[0]}, Even sum = ${result[1]}`);
        console.log(`Odd sum = ${evenSum}, Even sum = ${oddSum}`);
    }

}

sum(1000435);
sum(3495892137259234);