function sameNumbers(number) {
    let arr = String(number).split("").map(n => Number(n));
    let isSame = arr.filter(n => n !== arr[0]).length > 0 ? false : true;
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);