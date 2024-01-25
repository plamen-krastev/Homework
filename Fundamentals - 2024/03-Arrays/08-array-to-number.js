function solve(number) {

    while (number.length > 1) {
        for (let i = 0; i < number.length - 1; i++) {
            let curNum = number[i];
            let nextNum = number[i + 1];
            let sum = curNum + nextNum;
            number.splice(i, 1, sum);
        }
        if (number.length > 1) {
            number.pop();
        }
    }
    console.log(number[0]);
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);