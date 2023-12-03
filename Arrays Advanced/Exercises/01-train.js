function train(arr) {

    let passegers = arr[0]
        .split(' ')
        .map(Number);
    let capacity = Number(arr[1]);

    for (idx = 2; idx < arr.length; idx++) {
        let command = arr[idx].split(' ');

        if (command.length > 1) {
            passegers.push(Number(command[1]))
        } else {
            for (i = 0; i < passegers.length; i++) {
                if (capacity >= (passegers[i] + Number(command[0]))) {
                    passegers[i] += Number(command[0]);
                    break;
                }
            }
        }
    }

    console.log(passegers.join(' '));
}

// train([
//     '32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75'
// ]);
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