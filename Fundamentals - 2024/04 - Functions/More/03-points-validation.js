function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let distanceFromStart1 = Math.sqrt(((x1 - 0) ** 2 + (y1 - 0) ** 2));
    if (distanceFromStart1 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let distanceFromStart2 = Math.sqrt(((x2 - 0) ** 2 + (y2 - 0) ** 2));
    if (distanceFromStart2 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let distanceBetweenPoints = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));
    if (distanceBetweenPoints % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);