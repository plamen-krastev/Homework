function sum(num) {
  let numAsString = String(num);

  let result = calculation(numAsString);
  print(result);

    function calculation(str) {

        let oddSum = 0;
        let evenSum = 0;

        for (i = 0; i < numAsString.length; i++) {

            let curNum = Number(numAsString[i]);

            if (curNum % 2 == 0) {
                evenSum += curNum;
            } else {
                oddSum += curNum;
            }
        }

        return [oddSum, evenSum];
    }

    function print(result) {
        console.log(`Odd sum = ${result[0]}, Even sum = ${result[1]}`);
    }

}

sum(1000435);
sum(3495892137259234);