function sumFirstAndLast(arr) {
    let lastIndex = arr.length - 1;
    let sum = Number(arr[0]) + Number(arr[lastIndex]);
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);