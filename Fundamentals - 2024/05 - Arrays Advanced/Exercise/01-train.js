function train(arr) {

    let wagons = arr
        .shift()
        .split(" ")
        .map(x => Number(x));
    let capacity = Number(arr.shift());

    while (arr.length > 0) {

        let tokens = arr
            .shift()
            .split(' ');

        if (tokens[0] === 'Add') {
            let num = Number(tokens[1]);
            wagons.push(num);
        } else {
            let num = Number(tokens[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + num <= capacity) {
                    wagons[i] += num;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
train([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]);