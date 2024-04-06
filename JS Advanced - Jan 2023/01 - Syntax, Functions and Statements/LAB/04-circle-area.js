function circleArea(data) {
    // π * r^2
    if (typeof data === 'number') {
        let area = Math.PI * data ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(
            `We can not calculate the circle area, because we receive a ${typeof data}.`
        );
    }
}

circleArea(5);
circleArea('name');