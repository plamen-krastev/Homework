function solve(input) {
    let alphabet = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
        'I': 9,
        'J': 10,
        'K': 11,
        'L': 12,
        'M': 13,
        'N': 14,
        'O': 15,
        'P': 16,
        'Q': 17,
        'R': 18,
        'S': 19,
        'T': 20,
        'U': 21,
        'V': 22,
        'W': 23,
        'X': 24,
        'Y': 25,
        'Z': 26
    };

    let totalSum = 0;

    let strings = input
        .split(' ')
        .filter(s => s.length > 2);

    for (let string of strings) {
        let arrOfSymbolsAndNumbers = string.split('');
        let firstOperation = arrOfSymbolsAndNumbers.shift();
        let lastOperation = arrOfSymbolsAndNumbers.pop();
        let curNum = arrOfSymbolsAndNumbers.join('');
        curNum = Number(curNum);
        let curSum = 0;

        if (firstOperation === firstOperation.toUpperCase()) {
            //divide by letter's position in alphabet
            let divisor = alphabet[firstOperation];
            curSum = curNum / divisor;

            if (lastOperation === lastOperation.toUpperCase()) {
                //subtract by letter's position in alphabet
                let subtract = alphabet[lastOperation];
                curSum = curSum - subtract;
                totalSum += curSum;
            } else if (lastOperation === lastOperation.toLowerCase()) {
                //add by letter's position in alphabet
                let add = alphabet[lastOperation.toUpperCase()];
                curSum = curSum + add;
                totalSum += curSum;
            }

        } else if (firstOperation === firstOperation.toLowerCase()) {
            //multiply by letter's position in alphabet
            let multiplier = alphabet[firstOperation.toUpperCase()];
            curSum = curNum * multiplier;

            if (lastOperation === lastOperation.toUpperCase()) {
                //subtract by letter's position in alphabet
                let subtract = alphabet[lastOperation];
                curSum = curSum - subtract;
                totalSum += curSum;
            } else if (lastOperation === lastOperation.toLowerCase()) {
                //add by letter's position in alphabet
                let add = alphabet[lastOperation.toUpperCase()];
                curSum = curSum + add;
                totalSum += curSum;
            }
        }
    }
    console.log(totalSum.toFixed(2));
}

solve('A12b s17G');
solve('P34562Z q2576f   H456z');
solve('a1A');