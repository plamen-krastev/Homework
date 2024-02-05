function numberModification(number) {

    let numToString = number.toString();
    let sum = 0;
    let isNeedToAddNumbers = true;

    for (let digit of numToString) {
        let curNum = Number(digit);
        sum += curNum;
        if (sum / numToString.length > 5) {
            console.log(number);
            isNeedToAddNumbers = false;
            break;
        }
    }

    while (sum / numToString.length < 5) {
        numToString += 9;
        sum += 9;
    }

    if (isNeedToAddNumbers) {
        console.log(numToString);
    }
}

numberModification(101);
numberModification(5835);