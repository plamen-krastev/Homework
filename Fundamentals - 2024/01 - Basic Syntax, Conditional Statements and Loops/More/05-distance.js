function solve(x1, y1, x2, y2) {
    // c**2 = a**2 + b**2

    let distanceX = Math.abs(x1 - x2);
    let distanceY = Math.abs(y1 - y2);

    let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    console.log(distance);

}

solve(2, 4, 5, 0);
solve(2.34, 15.66, -13.55, -2.9985);