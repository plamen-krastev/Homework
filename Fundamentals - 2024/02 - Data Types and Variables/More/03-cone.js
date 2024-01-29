function solve(radius, height) {
    // volume = (1/3)πr2h
    // area = πr(r + √(r2 + h2))

    let volume = 1 / 3 * Math.PI * radius ** 2 * height;
    let area = Math.PI * radius * (radius + Math.sqrt(radius ** 2 + height ** 2));
    console.log('volume = ' + volume.toFixed(4));
    console.log('area = ' + area.toFixed(4));

}

solve(3, 5);
solve(3.3, 7.8);