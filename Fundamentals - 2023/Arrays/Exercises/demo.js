if (i == 0) {
    leftSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
        let curnum = arr[j];
        rightSum += curnum;
    }
    if (leftSum == rightSum) {
        isEqual = true;
    }
} else if (i == arr.length - 1) {
    rightSum = 0;
    for (let j = i - 1; j >= 0; j--) {
        let curnum = arr[j];
        leftSum += curnum;
    }
    if (leftSum == rightSum) {
        isEqual = true;
    }
}


for (let j = i + 1; j < arr.length; j++) {
    let curnum = arr[j];
    rightSum += curnum;
}
for (let j = i - 1; j >= 0; j--) {
    let curnum = arr[j];
    leftSum += curnum;
}