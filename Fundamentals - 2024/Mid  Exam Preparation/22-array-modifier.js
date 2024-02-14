function solve(input) {

    let numbers = input
        .shift()
        .split(' ')
        .map(x => Number(x));
    let token = input.shift();

    while (token !== 'end') {
        let [command, index1, index2] = token.split(' ');

        switch (command) {
            case 'swap':
                let tmp = numbers[index1];
                numbers[index1] = numbers[index2];
                numbers[index2] = tmp;
                break;
            case 'multiply':
                let multiply = numbers[index1] * numbers[index2];
                numbers[index1] = multiply;
                break;
            case 'decrease':
                numbers = numbers.map(n => n - 1);
                break;
        }
        token = input.shift();
    }
    console.log(numbers.join(', '));
}

// solve([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ]);
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);