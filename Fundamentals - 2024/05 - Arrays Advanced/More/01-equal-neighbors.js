function solve(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let curEl = input[i][j];
            let nextIndex = j + 1;
            let nextEl = input[i][nextIndex];
            if (nextIndex === input[i].length) {
                break;
            }
            // console.log(curEl, nextEl);
            if (curEl === nextEl) {
                count++;
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {

            let topEl = input[i][j];
            let belowIndex = i + 1;
            if (belowIndex === input.length) {
                break;
            }
            let belowEl = input[belowIndex][j];
            // console.log(topEl, belowEl);
            if (topEl === belowEl) {
                count++;
            }
        }
    }
    console.log(count);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

solve([
    ['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']
]);
